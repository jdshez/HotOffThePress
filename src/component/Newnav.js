import LoginButton from "./LoginButton";
import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "./Profile";
import { Link } from 'react-router-dom';
import globe from '../earth-globe.svg';

const Newnav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header z-depth-2">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/HotOffThePress/" className="logo">
            <img className="globe" src={globe}></img>Hot Off The Press
          </Link>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
           <Link to="/HotOffThePress/" className="option-txt" >Home</Link>
          </li>  
          <li className="option" onClick={closeMobileMenu}>
            {!isAuthenticated ? (    
                <Link to="/demo" className="option-txt" >Demo</Link>
            ) : <Profile />}
          </li>
          
          <li className="lgin-btn-ctr">
             <LoginButton size=""/>
          </li>
        </ul>
      </div>
      <ul className="desk-options">
        <li className="demo-pro-option">
        {!isAuthenticated ? (    
                <Link to="/demo" className="option-txt" >Demo</Link>
            ) : <Profile />} 
        </li>
        <li className="lgin-btn-ctr " onClick={closeMobileMenu}>
            <LoginButton size=""/>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <i className="material-icons menu-icon">close</i> 
        ) : (
          <i className="material-icons menu-icon">menu</i>
        )}
      </div>
    </div>
  );
};

export default Newnav;