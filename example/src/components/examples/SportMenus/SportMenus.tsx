import AcroolCarousel, {
    AcroolSlideCard,
    Controller,     elClassName,
    ICarouselState,
    IInfo,
    moveEffectFn,     TAcroolSlideItemDataList,
    TMoveEffectFn
} from '@acrool/react-carousel';
import {useRef, useState} from 'react';

import {baseImage} from '../../data';








function SportMenus() {
    const [carouselState, setCarouselState] = useState<ICarouselState>();
    const [enable, setEnable] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const [controller, setController] = useState<Controller>();
    const [slidePreview, setSlidePreview] = useState(1);


    // 輪播項目1
    const acroolSlideItemData1: TAcroolSlideItemDataList = baseImage.map(row => {
        return <AcroolSlideCard key={row.id} bgUrl={row.imageUrl} style={{width: '200px', height: '200px'}}/>;
    });


    // const handleOnPercentage: IBreakpointSetting['effectFn'] = (el, percentage) => {
    //     el.style.transform = `translate(0px, ${-50 * percentage}px)`;
    //     el.style.transition = 'none';
    // };
    const customMoveEffectFn: TMoveEffectFn = (percentageInfo) => {
        const transformY = 80;
        return {
            transform: `translate(0px, ${-transformY * (percentageInfo.calcPercentage - 1)}px)`,
            opacity: percentageInfo.calcPercentage,
        };
    };


    return <div>
        {/*測試依照比例設定容器高度*/}
        <AcroolCarousel
            // style={{width: '400px'}}
            setController={setController}
            data={enable ? acroolSlideItemData1: undefined}
            onSlideChange={setCarouselState}
            // onSlideChange={setCarouselState}
            slidesPerView={5}
            isCenteredSlides
            height="200px"
            // height={{widthRatio: 21, heightRatio: 9}}
            isEnableNavButton
            // renderPagination={(pageTotal) => {
            //     return [
            //         <div>sad</div>
            //     ];
            // }}
            isEnablePagination
            // isEnableLoop
            // isEnableAutoPlay={false}
            moveEffect={{
                moveFn: customMoveEffectFn,
                // moveFn: moveEffectFn.transformY(80),
            }}
            // effectFn={handleOnPercentage}

            isDebug
        />

        {/*<button type="button" onClick={() => setCount(curr => curr += 1)}> count: {count}</button>*/}
        {/*<button type="button" onClick={() => setEnable(curr => !curr)}> enable: {String(enable)}</button>*/}

        {/*{Array.from({length: 5}).map((row, index) => {*/}
        {/*    return <button key={index} type="button" onClick={() => controller?.slideToPage(index + 1)}> slideToPage {index +1} </button>;*/}
        {/*})}*/}

        {/*<br/>*/}

        {/*<select onChange={event => setSlidePreview(Number(event.target.value))}>*/}
        {/*    <option value={1}>1</option>*/}
        {/*    <option value={2}>2</option>*/}
        {/*    <option value={3}>3</option>*/}
        {/*</select>*/}

        {/*<pre>*/}
        {/*    {JSON.stringify(carouselState, null, '\t')}*/}
        {/*</pre>*/}
    </div>;

}

export default SportMenus;



