import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import Video from '../../images/trees.jpg';
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    SocialIcons,
    SocialIconLink
} from './HeroElements';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImgBg type='image/jpg' src={Video} alt='bg-img'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi I am Helmut!</HeroH1>
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
                <HeroBtnWrapper>
                    <Button href='//www.github.com' target='_blank' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'>
                        Contact Me{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>

                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection