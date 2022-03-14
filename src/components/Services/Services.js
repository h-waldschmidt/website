import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='about'>
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expe</ServicesH2>
                    <ServicesP>We help</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Reduce Expe 2</ServicesH2>
                    <ServicesP>We help 2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce Expe 3</ServicesH2>
                    <ServicesP>We help 3</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services