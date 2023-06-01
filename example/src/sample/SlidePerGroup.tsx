import {useRef, useState} from 'react';
import BearCarousel, {BearSlideItem, TBearSlideItemDataList, elClassName, IInfo} from 'bear-react-carousel';
import {baseImage as images} from '../config/images';

import {Controller} from 'bear-react-carousel';




// 輪播項目1
const bearSlideItemData1: TBearSlideItemDataList = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem as="card">
            <div className="h-100 d-flex"
                style={{fontSize: '40px', backgroundColor: row.color}}
            >
                {/*<a href="https://carousel.bearests.com" rel="noreferrer" target="_blank">{row.id}</a>*/}
            </div>
        </BearSlideItem>
    };
});




function SlidePerGroup() {
    const [info, setInfo] = useState<IInfo>();
    const [enable, setEnable] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const controllerRef = useRef<Controller>(null);

    return <div>
        {/*測試依照比例設定容器高度*/}
        {enable && (
            <BearCarousel
                controllerRef={controllerRef}
                data={bearSlideItemData1}
                onChange={setInfo}

                slidesPerView={3}
                slidesPerGroup={3}
                staticHeight="200px"
                isEnableNavButton
                isEnablePagination
                isEnableLoop
                isDebug
            />)}

        <button type="button" onClick={() => setCount(curr => curr += 1)}> count: {count}</button>
        <button type="button" onClick={() => setEnable(curr => !curr)}> enable: {String(enable)}</button>
        <button type="button" onClick={() => {
            if(controllerRef.current){
                controllerRef.current.slideToPage(7);
            }
        }}> slideToPage 7 </button>

        <br/>
        <pre>
            {JSON.stringify(info, null, '\t')}
        </pre>
    </div>;

}

export default SlidePerGroup;


