import {useRef, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {media} from 'bear-react-grid';
import BearCarousel, {BearSlideCard, TBearSlideItemDataList, elClassName, IInfo} from 'bear-react-carousel';
import {baseImage as images} from '../config/images';

import {Controller} from 'bear-react-carousel';




// 輪播項目1
const bearSlideItemData1: TBearSlideItemDataList = images.map(row => {
    return {
        key: row.id,
        paginationContent: <>{row.color}</>,
        children: <BearSlideCard>
            <div className="h-100 d-flex"
                style={{fontSize: '40px', backgroundColor: row.color}}
            />
        </BearSlideCard>
    };
});


const autoPlayTime = 1500;


function RenderPagination() {
    const [info, setInfo] = useState<IInfo>();
    const [enable, setEnable] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const controllerRef = useRef<Controller>(null);
    const [slidePreview, setSlidePreview] = useState(1);

    // console.log('slidePreview', slidePreview);
    return <CarouselBox>
        {/*測試依照比例設定容器高度*/}
        {enable && (
            <BearCarousel
                // controllerRef={controllerRef}
                data={bearSlideItemData1}
                // onChange={setInfo}
                slidesPerView={slidePreview}
                isCenteredSlides={true}
                staticHeight="200px"
                isEnableNavButton
                isEnablePagination
                isEnableLoop
                isEnableAutoPlay={true}
                autoPlayTime={autoPlayTime}
                renderPagination={(pageTotal: number) => {
                    return images.map(row => {
                        return <>{row.color}</>;
                    });
                }}
                breakpoints={{
                    992: {
                        isEnablePageContent: true,
                    }
                }}
                isDebug
            />)}

        <button type="button" onClick={() => setCount(curr => curr += 1)}> count: {count}</button>
        <button type="button" onClick={() => setEnable(curr => !curr)}> enable: {String(enable)}</button>
        <button type="button" onClick={() => {
            if(controllerRef.current){
                controllerRef.current.slideToPage(5);
            }
        }}> slideToPage5 </button>

        <br/>

        <select onChange={event => setSlidePreview(Number(event.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>
        <pre>
            {JSON.stringify(info, null, '\t')}
        </pre>
    </CarouselBox>;

}

export default RenderPagination;




const progress = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`;

const CarouselBox = styled.div`

  
  
  
  .${elClassName.paginationContent}{
    background-color: rgba(255, 255, 255, .8);
    
  }


    ${media.sm`
        .${elClassName.paginationGroup}{
            bottom: 0;
            width: 100%;
            color: #000;
            overflow: hidden;
            
        }
        .${elClassName.paginationButton}{
            margin: 0 10px;
            :after {
                content: '';
                width: 0;
                height: 4px;
                background-color: greenyellow;
                position: absolute;
                bottom: 0;
                left: 0;
            }
            
    
            &[data-active="true"]:after {
                animation-iteration-count: 1;
                animation: ${progress} ${autoPlayTime}ms linear infinite;
            }
        }   
    `}
    
`;
