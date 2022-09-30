import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

const Navbar = ({ toggle }) => {
    // TODO: I can remove this part
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const toggleHome = ({ toggle }) => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    //TODO: The Provider thing can also be removed
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            Helmut
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home'  
                                    onClick={toggleHome}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='About'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='Skills'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Skills
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='Projects'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Projects
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar