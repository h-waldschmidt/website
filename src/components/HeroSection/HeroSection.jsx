import React from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from './HeroElements';
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                // change this part
                <VideoBg autoPlay loop muted type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    );
};

export default HeroSection