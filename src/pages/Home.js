import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
} from '../components/InfoSection/Data'
import Services from '../components/Services/Services';


function Home() {

    return (
        <>
            <HeroSection />
            <InfoSection />
            <Services />
        </>
    )
};

export default Home