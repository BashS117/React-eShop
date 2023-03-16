import React,{useState, useContext} from 'react';
import '../styles/Header.scss'
import MyOrder from '../containers/MyOrder';

import logo from '../assets/images/logo.svg';
import shopingCartIcon from '../assets/images/icon-cart.svg';
import imageaAvatar from '../assets/images/image-avatar.png'

import AppContext from '../context/AppContext';

const Header = () => {
    const [toggle, setToggle]=useState(false);
    const {state}= useContext(AppContext);

    const handleToggle = ()=>{
      setToggle(!toggle);
    }
    return (
        <nav>

            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />

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
                    <li onClick={()=>handleToggle()} className="navbar-shopping-cart">
                        <img  src={shopingCartIcon} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}                   </li>
                    <li className="user-icon">
                        <img src={imageaAvatar} alt="user-icon" />
                    </li>
                </ul>
            </div>
            {/* shoopingCart(My Order) */}
            {toggle && <MyOrder />}
        </nav>

    );
}

export default Header;