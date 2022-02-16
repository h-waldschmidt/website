import styled from 'styled-components';

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