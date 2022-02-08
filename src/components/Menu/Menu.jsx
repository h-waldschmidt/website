import React from 'react';
import { MenuItems } from "./MenuItems";
import './Menu.css';
import { Button } from "./Button"

class Menu extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className="MenuItems">
                <h1 className="menu-logo"><i className="fab fa-react">React</i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'menu active' : 'menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Contact</Button>
            </nav>
        )
    }
}

export default Menu