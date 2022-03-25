import React from 'react'

import AboutSocials from './AboutSocials'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from './InfoElements';

function InfoSection() 
{

    return (
        <>
            <InfoContainer lightBg={false} id='About'>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={true}>About Me</Heading>
                                <Subtitle darkText={false}>I'm an Student at Stuttgart University. I am passionate about developing quality software.</Subtitle>
                                <AboutSocials show={true}/>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/aboutme.svg')} alt='img' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            <InfoContainer lightBg={true} id='Skills'>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={false}>Skills</Heading>
                                <Subtitle darkText={true}>Desc</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/aboutme.svg')} alt='img' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection