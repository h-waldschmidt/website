import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-scroll';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#6dc64b' : '#010606')};

    @media screen and (max-width: 768px){
        padding:75px 0;
    }
    
`;

export const InfoWrapper = styled.div`
    display:grid;
    z-index: 1;
    height: 65vh;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 2.5vh;
    justify-content: center;
    @media screen and (max-width: 480px){
        width: 90%;
        height: 30vh;
    }
    
`;

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    @media screen and (max-width: 480px){
        padding:0;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 80%;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 480px){
        max-width: 100%;
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 1.5vh;
    line-height: 1.55vh;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 1.55vh;
`;

export const Heading = styled.h1`
    margin-bottom: 2.5vh;
    font-size: 4vh;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 100%;
    margin-bottom: 3vh;
    font-size: 1.6vh;
    line-height: 2.5vh;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;
   // margin-left:12.5%;
`;

export const ImgWrap = styled.div`
    max-width: 20vw;
    height: 100%;
    @media screen and (max-width:834px){
        max-width: 100%;
    }
    @media screen and (max-width: 480px){
        display:none;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
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
    @media screen and (max-width: 480px){
        width: 100%;
    }
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

export const HeroP = styled.p`
    margin-top: 2.5vh;
    margin-bottom: 1vh;
    color: #fff;
    font-size: 2.5vh;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    
    @media screen and (max-width: 480px){
        font-size:18px;
    }
`;

export const Button = styled(Link)`
    border-radius: 5.25vh;
    background: ${({ primary }) => (primary ? '#fff' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '1.25vh 5vh' : '1vh 2vh')};
    color: ${({ dark }) => (dark ? '#000' : '#000')};
    font-size:${({ fontBig }) => (fontBig ? '1.5vh' : '1.25vh')};
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 1.5vh;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#fff')};
    }
`;

export const ServicesContainer = styled.div`
    height:60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 125vh;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap:1.5vh;
    padding: 0 5vh;
    @media screen and (max-width:1000px){
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns:1fr;
        padding:0;
        margin: 0;
        max-width: 90%;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1vh;
    max-height: 35vh;
    padding: 2.7vh;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 15vh;
    width: 15vh;
    margin-bottom: 1vh;
    @media screen and (max-width: 768px){
        height: 20vh;
        width: 30vh;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 5vh;
    color:#fff;
    margin-bottom: 7.5vh;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 2vh;
    margin-bottom: 1vh;
`;

export const ServicesP = styled.p`
    font-size:1.5vh;
    text-align: center;
`;