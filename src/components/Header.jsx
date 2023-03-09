import React from 'react';
import '../styles/Header.scss'
import MyOrder from '../containers/MyOrder';
const Header = () => {
    return (
        <nav>

            <div className="navbar-left">
                <img src="./assets/logo.svg" alt="logo" className="logo" />

                <ul>
                    <li>
                        <a href="/">Collections</a>
                    </li>
                    <li>
                        <a href="/">Men</a>
                    </li>
                    <li>
                        <a href="/">Women</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">

                <ul>
                    <li className="navbar-shopping-cart">
                        <img src="./assets/icon-cart.svg" alt="shopping cart" />
                        <div>2</div>
                    </li>
                    <li className="user-icon">
                        <img src="./assets/image-avatar.png" alt="user-icon" />
                    </li>
                </ul>
            </div>

<MyOrder/>
        </nav>

    );
}

export default Header;