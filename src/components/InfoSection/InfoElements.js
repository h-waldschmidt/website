import styled from 'styled-components';

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
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 2.5vh;
    justify-content: center;
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
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 35%;
    padding-top: 0;
    padding-bottom: 60px;
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
    font-size: 5vh;
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
`;

export const ImgWrap = styled.div`
    max-width: 20vw;
    height: 100%;
    @media screen and (max-width:834px){
        max-width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`