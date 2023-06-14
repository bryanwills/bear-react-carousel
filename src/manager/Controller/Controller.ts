import {TEventMap} from './types';
import {getNextIndex, getPrevIndex, getSlideIndex} from './utils';

import Configurator from '../Configurator';
import Stater from '../Stater';
import Elementor from '../Elementor';
import Eventor from '../Eventor';
import {logEnable} from '../../config';
import logger from '../../logger';


class Controller {
    private readonly _configurator: Configurator;
    private readonly _stater: Stater;
    private readonly _elementor: Elementor;
    private _eventor = new Eventor<TEventMap>();

    constructor(manager: {
        configurator: Configurator,
        stater: Stater,
        elementor: Elementor,
    }) {
        this._configurator = manager.configurator;
        this._stater = manager.stater;
        this._elementor = manager.elementor;
    }

    onSlideBefore = (callback: TEventMap['slideBefore']) => {
        this._eventor.on('slideBefore', callback);
    };


    onSlideAfter = (callback: TEventMap['slideAfter']) => {
        this._eventor.on('slideAfter', callback);
    };


    offSlideBefore = (callback: TEventMap['slideBefore']) => {
        this._eventor.off('slideBefore', callback);
    };

    offSlideAfter = (callback: TEventMap['slideAfter']) => {
        this._eventor.off('slideAfter', callback);
    };


    /**
     * reset page position (Only LoopMode)
     * PS: If the element is isClone then return to the position where it should actually be displayed
     */
    slideResetToMatchIndex = (): void => {
        if(this._configurator.setting.isDebug && logEnable.controller.onSlideResetToMatchIndex) logger.printInText('[Controller.slideResetToMatchIndex]');
        const {actual, formatElement} = this._stater;

        if (formatElement[actual.activeIndex].isClone) {
            this.slideToActualIndex(formatElement[actual.activeIndex].matchIndex, {isUseAnimation: false});
        }
    };



    slideToActualIndex = (slideIndex: number, options?: {isUseAnimation?: boolean, isEmitEvent?: boolean}) => {
        const isEmitEvent = options?.isEmitEvent ?? true;
        if(isEmitEvent) this._eventor.emit('slideBefore', slideIndex, options?.isUseAnimation);

        if (this._stater.checkActualIndexInRange(slideIndex)) {
            const {formatElement} = this._stater;
            this._stater.setActiveActual(slideIndex, formatElement[slideIndex]?.inPage ?? 1);

            // 移動EL位置
            const position = this._elementor.getMoveDistance(slideIndex);
            this._elementor
                .transform(position, options?.isUseAnimation ?? true)
                .syncActiveState(slideIndex);
        }

        if(isEmitEvent) this._eventor.emit('slideAfter', slideIndex, options?.isUseAnimation);
    };

    /**
     * 移動到指定頁面
     * @param page
     * @param isUseAnimation 是否開啟動畫
     * ex: slideView: 2, slideGroup: 2, total: 4
     * page1 -> (1-1) * 2) + 1 + (firstIndex -1) = 1
     */
    slideToPage(page: number, isUseAnimation = true){
        const {setting} = this._configurator;
        const {actual} = this._stater;

        page = page > this._stater.page.pageTotal ? this._stater.page.pageTotal: page;

        const slideIndex = getSlideIndex(page, setting.slidesPerGroup, actual.firstIndex);
        this.slideToActualIndex(slideIndex, {isUseAnimation});
    }

    /**
     * 移動到下一頁
     */
    slideToNextPage = (): void => {
        getNextIndex(this._elementor, this._stater, this._configurator)
            .forEach(action => this.slideToActualIndex(action.index, {isUseAnimation: action.isUseAnimation}));
    };

    /**
     * go to previous
     */
    slideToPrevPage = (): void => {
        getPrevIndex(this._elementor, this._stater, this._configurator)
            .forEach(action => this.slideToActualIndex(action.index, {isUseAnimation: action.isUseAnimation}));

    };

}


export default Controller;
