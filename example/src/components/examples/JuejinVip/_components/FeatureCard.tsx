import styled from 'styled-components';
import React from 'react';
import {media} from '@acrool/react-grid';

interface IData {
    imageUrl: string,
    text: string,
}

interface IProps extends IData{
   className?: string
}

const FeatureCard = ({
    className,
    imageUrl,
    text,
}: IProps) => {
    return <FeatureCardRoot>
        <Logo src={imageUrl}/>

        <Text>
            {text}
        </Text>
    </FeatureCardRoot>;
};

export default FeatureCard;



const Logo = styled.img`
    width: 44px;
    height: 44px;
    position: absolute;
    top: -22px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
`;


const Text = styled.p`
    font-size: 13px;
    font-weight: bold;
`;


const FeatureCardRoot = styled.div`


    width: 85px;
    height: 85px;
    background: linear-gradient(rgba(24, 32, 79, 0.72) 0%, rgba(24, 32, 79, 0.45) 100%);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset;
    border-radius: 99em;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    margin-top: 22px;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


  ${media.sm`
    width: 120px;
    height: 120px;
  `}

`;

