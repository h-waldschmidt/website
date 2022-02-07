import React from 'react';
import{MenuItems} from "./MenuItems";
import'./Menu.css';

class Menu extends React.Component{
    state = {clicked: false}

    

    render(){
        return(
            <nav className="MenuItems">
                <h1 className="menu-logo"><i className="fab fa-icon">React</i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Menu