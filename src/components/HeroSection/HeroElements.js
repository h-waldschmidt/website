import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    margin-top:-8vh;
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 85vh;
    position: relative;
    z-index: 1;
    :before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    @media screen and (max-width:768px){
        height: 65vh;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 80%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 5vh;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;

    }

    @media screen and (max-width: 480px){
        font-size:32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 2.5vh;
    color: #fff;
    font-size: 2.5vh;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;

    }

    @media screen and (max-width: 480px){
        font-size:18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 3.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 2.25vh;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 2.25vh;
`;

export const SocialIcons = styled.div`
    display: center;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    padding: 1vh;
    color: #fff;
    font-size: 2.5vh;
    svg:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;