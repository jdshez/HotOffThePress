import React from 'react';
import { Link } from 'react-router-dom';
import globe from '../earth-globe.svg';
import fbk from '../facebook.png';
import twt from '../twitter.png';
import ins from '../instagram.png';

const Footer = () => {
    return ( 
        <footer class="page-footer">
          <div class="container">
            <div class="row valign-wrapper row-1">
              <div class="col s12 l6">
                <Link to="/" className="logo"><h5><img className="globe" src={globe}></img>Hot Off The Press</h5></Link>
                <p class="">Here at Hot Off the Press we aim to provide our users with the latest news sourced from across the globe.</p>
              </div>
              <div class="col s12 l4 offset-l2">
                <h5 class="social-hd">Social</h5>
                <ul className="social-icons">
                  <li><a class="" href="#!"><img src={fbk}></img></a></li>
                  <li><a class="" href="#!"><img src={twt}></img></a></li>
                  <li><a class="" href="#!"><img src={ins}></img></a></li>
                </ul>
              
              </div>
            </div>
            <div className="row valign-wrapper row-2">
                <div className="col s12 l6 ">
                  <a class="store-link" href="#!"><img src="https://adbeus.com/wp-content/uploads/2016/09/ios.png"></img></a>
                </div>
                <div className="col s12 l4 offset-l2">
                  <a class="store-link" href="#!"><img src="https://adbeus.com/wp-content/uploads/2016/09/get-it-on-google-play-vector.png"></img></a>
                </div>
              </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright HOTOFFTHEPRESS
            
            </div>
          </div>
        </footer>
     );
}
 
export default Footer;