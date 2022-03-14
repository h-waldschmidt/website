import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
    ArrowForward,
    ArrowRight,
    HeroP,
    SocialIcons,
    SocialIconLink,
    Button,
    BtnWrap
} from './InfoElements';

function AboutSocials(props)
{
    const show = props.show;
    const [hover1, setHover1] = useState(false);

    const onHover1 = () => {
        setHover1(!hover1);
    }
    const [hover2, setHover2] = useState(false);

    const onHover2 = () => {
        setHover2(!hover2);
    }
    if(show){
    return(
    <>
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
            onMouseEnter={onHover1} 
            onMouseLeave={onHover1}
        >
            Contact Me{hover1 ? <ArrowForward /> : <ArrowRight />}
        </Button>
        <Button 
            onMouseEnter={onHover2} 
            onMouseLeave={onHover2}
        >
            My Resume{hover2 ? <ArrowForward /> : <ArrowRight />}
        </Button>
        </BtnWrap>
    </>
    )
    }else{
        return(<></>)
    }
}

export default AboutSocials