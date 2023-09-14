import {useRef, useState} from 'react';
import BearCarousel, {
    BearSlideCard,
    TBearSlideItemDataList,
    elClassName,
    IInfo,
    BearSlideImage, ICarouselState
} from 'bear-react-carousel';
import {baseImage as images} from '../config/images';
import {carImages} from '../config/images';






// 輪播項目1
const bearSlideItemData1: TBearSlideItemDataList = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard>
            <div className="h-100 d-flex"
                 style={{fontSize: '40px', height: '200px', width: '250px',backgroundColor: row.color}}
            >
                {/*<a href="https://bear-react-carousel.github.io" rel="noreferrer" target="_blank">{row.id}</a>*/}
            </div>
        </BearSlideCard>
    };
});



// 輪播項目2
const bearSlideItemData2: TBearSlideItemDataList = carImages.map(row => {
    return {
        key: row.id,
        children: <BearSlideImage imageUrl={row.imageUrl} onClick={() => console.log('xxx')}/>
    };
});




function SlideImage() {
    const [carouselState, setCarouselState] = useState<ICarouselState>();
    const [enable, setEnable] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);

    return <div>
        {/*測試依照比例設定容器高度*/}
        <BearCarousel
            // style={{width: '400px'}}
            // controllerRef={controllerRef}
            data={bearSlideItemData1}
            // onSlideChange={setCarouselState}
            slidesPerView="auto"
            // isCenteredSlides
            spaceBetween={5}
            isEnableNavButton
            isEnablePagination
            // isEnableLoop
            // isEnableAutoPlay={false}
            isDebug
        />

        <button type="button" onClick={() => setCount(curr => curr += 1)}> count: {count}</button>
        <button type="button" onClick={() => setEnable(curr => !curr)}> enable: {String(enable)}</button>

        <BearCarousel
            // style={{width: '400px'}}
            // controllerRef={controllerRef}
            data={bearSlideItemData1.slice(0, 3)}
            // onSlideChange={setCarouselState}
            slidesPerView="auto"
            isCenteredSlides
            spaceBetween={5}
            isEnableNavButton
            isEnablePagination
            // isEnableLoop
            // isEnableAutoPlay={false}
            isDebug
        />


        <BearCarousel
            // style={{width: '400px'}}
            // controllerRef={controllerRef}
            data={bearSlideItemData2.slice(0, 3)}
            // onSlideChange={setCarouselState}
            slidesPerView={3}
            spaceBetween={5}
            isCenteredSlides
            // height="200px"
            // height="200px"
            isEnableNavButton
            isEnablePagination
            // isEnableLoop
            // isEnableAutoPlay={false}
            isDebug
        />

        <pre>
            {JSON.stringify(carouselState, null, '\t')}
        </pre>
    </div>;

}

export default SlideImage;



