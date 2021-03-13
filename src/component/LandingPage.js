import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import newsp from "../news-comp.mp4";
import pic1 from "../b-1.png";
import pic2 from "../b-2.png";
import pic3 from "../gi-1.png";
import pic4 from "../gi-2.png";
import storypic from '../stories-matter.jpg'

const LandingPage = () => {
    const { user, isAuthenticated } = useAuth0();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        !isAuthenticated && (
            <div>
                <div className="video-container">
                    <video className="responsive-video" src={newsp} autoPlay loop alt="newspaper being read"></video>
                    <h3 className="main-hd">Want to keep informed but don't have the time...</h3>
                    <div className="arrow-ctr hide-on-small-only" ><i className="material-icons">expand_more</i></div>
                    <div className="main-btn-ctr hide-on-small-only"><LoginButton size="-large"/></div>
                    
                </div>
                <div className="small-btn-ctr center-align hide-on-med-and-up"><LoginButton size=""/></div>
                <div className="section row container">
                    <div className=" valign-wrapper sales-row">
                        <div className="col s12 m6 center-align"><i className="icon-ctr large material-icons">access_time</i></div>
                        <div className="col s12 m6 center-align"><h4 className="sales-point">Your time is precious, so we do the research for you</h4></div>
                    </div>
                    <div className=" row valign-wrapper sales-row-rev">    
                        <div className="col s12 m6 center-align"><h4 className="sales-point">We bring you the stories that matter</h4></div>
                        <div className="col s12 m6 center-align"><i className="icon-ctr large material-icons">subject</i></div>
                    </div>
                    <div className=" row valign-wrapper sales-row">
                        <div className="col s12 m6 center-align"><i className="icon-ctr large material-icons">language</i></div>
                        <div className="col s12 m6 center-align"><h4 className="sales-point">Get the latest news from across the globe</h4></div>
                    </div>
                </div>
                <div className="section banner">
                    <img loading="lazy" className="responsive-img banner-img" src={storypic}></img>
                    <div className="banner-btn-ctr "><LoginButton size="-large"/></div>
                </div>
                <div className="container center staff-main-ctr">
                    <h4 className="team-title col s12 ">Meet the Team</h4>
                    <div className="staff-flex">
                        <div className="staff-ctr col s12 m6 l4">
                            <div className="staff-content-ctr">
                                <img className="staff-img" src={pic1}></img>
                                <h5>Jim Smith</h5>
                                <p>Chief & Sports Editor</p>
                            </div>
                        </div>
                        <div className="staff-ctr col s12 m6 l4">
                            <div className="staff-content-ctr">
                                <div className="img-ctr">
                                    <img className="staff-img" src={pic4}></img>
                                </div>
                                <h5>Ella Anderson</h5>
                                <p>Tech & Science Editor</p>
                            </div>
                        </div>
                        <div className="staff-ctr col s12 m6 l4">
                            <div className="staff-content-ctr">
                                <img className="staff-img" src={pic3}></img>
                                <h5>Jane Beauford</h5>
                                <p>Politics & Travel Editor</p>
                            </div>
                        </div>
                        <div className="staff-ctr col s12 m6 l4  ">
                            <div className="staff-content-ctr">
                                <img className="staff-img" src={pic2}></img>
                                <h5>Marcelo Salat</h5>
                                <p>Current Affairs & Arts Editor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default LandingPage