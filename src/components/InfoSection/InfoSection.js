import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    ArrowForward,
    ArrowRight,
    HeroP,
    SocialIcons,
    SocialIconLink,
    Button
} from './InfoElements';

function InfoSection({ lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) 
{
    const [hover1, setHover1] = useState(false);

    const onHover1 = () => {
        setHover1(!hover1);
    }
    const [hover2, setHover2] = useState(false);

    const onHover2 = () => {
        setHover2(!hover2);
    }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>I'm an Student at Stuttgart University. 
                                I am passionate about developing quality software.</Subtitle>
                                <HeroP>
                    <SocialIcons>
                        <SocialIconLink href='//www.github.com' target='_blank' aria-label='Linkedin'>
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </HeroP>
                                <BtnWrap>
                                    <Button 
                                        primary={primary ? 1 : 0}
                                        dar={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onMouseEnter={onHover1} 
                                        onMouseLeave={onHover1}
                                    >
                                        Contact Me{hover1 ? <ArrowForward /> : <ArrowRight />}
                                    </Button>
                                    <Button 
                                        primary={primary ? 1 : 0}
                                        dar={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onMouseEnter={onHover2} 
                                        onMouseLeave={onHover2}
                                    >
                                        My Resume{hover2 ? <ArrowForward /> : <ArrowRight />}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection