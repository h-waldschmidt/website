import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 5.25vh;
    background: ${({ primary }) => (primary ? '#fff' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '1.25vh 5vh' : '1.25vh 3vh')};
    color: ${({ dark }) => (dark ? '#000' : '#000')};
    font-size:${({ fontBig }) => (fontBig ? '2.25vh' : '1.55vh')};
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#fff')};
    }
`;