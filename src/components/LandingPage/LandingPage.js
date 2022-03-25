import React from 'react'

import AboutSocials from './AboutSocials'
import Icon1 from '../../images/svg-1.svg'

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
    Img,
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './LandingElements';

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
            <ServicesContainer id='Projects'>
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expe</ServicesH2>
                    <ServicesP>We help</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expe 2</ServicesH2>
                    <ServicesP>We help 2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expe 3</ServicesH2>
                    <ServicesP>We help 3</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    );
}

export default InfoSection