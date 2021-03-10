import React, { Component } from 'react';
import LoginButton from "./LoginButton";
import Searchbar from "./Searchbar";
import { withAuth0 } from '@auth0/auth0-react';
import Profile from "./Profile";
import { Link } from 'react-router-dom';
import globe from '../earth-globe.svg';
import M from 'materialize-css';

class Navbar extends Component {
    
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav'); 
            var instances = M.Sidenav.init(elems);   
        })
    };
    
    render () {
        const { user, isAuthenticated } = this.props.auth0;

        return ( 
            <nav className="white nav-wrapper">
                <div className=''>
                    <Link to="/" className="logo" ><img className="globe" src={globe}></img>Hot Off The Press</Link>
                    <Link to="#" data-target="mobile-menu" className="sidenav-trigger right">
                        <i className="material-icons burger-menu">menu</i>
                    </Link>
                    <ul id="nav-mobile" className='right hide-on-med-and-down'>
                        {/*isAuthenticated && <li><Searchbar /></li>*/}
                        
                        {/*{isAuthenticated && (*/}
                        <li><Profile /></li>
                        
                        {!isAuthenticated && (    
                        <li>
                        <Link to="/demo" className="black-text" >Demo</Link>
                        </li>)}
                           
                        <li className="lgin-btn-ctr">
                            <LoginButton size=""/>
                        </li>
                    </ul>
                    <ul className="sidenav" id="mobile-menu">
                        <li>
                            <Link to="/" className="mob-home" >HOME</Link>
                        </li>
                        <li>
                            <Profile />
                        </li>
                        {!isAuthenticated && (    
                            <li>
                                <Link to="/demo" className="" >Demo</Link>
                            </li>)
                        }  
                        <li className="mob-lgin-btn-ctr">
                            <LoginButton size=""/>
                        </li>        
                    </ul>
                </div>
                
            </nav>
        )
    
    }
    
} 
export default withAuth0(Navbar)