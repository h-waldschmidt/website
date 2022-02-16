import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                // TODO: change this part
                <VideoBg autoPlay loop muted type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking</HeroH1>
                <HeroP>Sign up for</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>

                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection