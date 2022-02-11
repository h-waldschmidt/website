import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
} from '../components/InfoSection/Data'
import Services from '../components/Services/Services';


function Home() {

    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
        </>
    )
};

export default Home