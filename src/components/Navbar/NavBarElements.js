import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};;
    height: 8vh;
    display: flex;
    justify-content: center;
    font-size: 1.25vh;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.7s all ease;
    }
    @media screen and (max-width: 834px){
        background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8vh;
    z-index: 1;
    width: 75%;
    padding:0 1.25vh;
    @media screen and (max-width: 834px) {
        width: 100%;
    }
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.25vh;
    display: flex;
    align-items: center;
    margin-left: 2.5vh;
    font-weight: bold;
    text-decoration: none;
    @media (max-width: 834px) {
        padding-top: 0.5vh;
    }
    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media (max-width: 834px) {
        color:#fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -2.45vh;

    @media screen and (max-width: 834px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 8vh;
    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.35vh;
    &.active{
        border-bottom: 0.2vh solid #fff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 834px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 5.2vh;
    background: #01bf71;
    white-space: nowrap;
    padding: 1vh 2.4vh;
    color: #010606;
    font-size: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:#010606;
    }
`;