import React from 'react';
import LandingPage from './LandingPage';
import Search from './Search';


const Home = () => {
    

    return (
        <> 
        
        <Search exc={false}/> 
        <LandingPage />
        
        </>
    )
}
 
export default Home;


{/*<div style={{ display: isAuthenticated ? "none" : "" }}><LandingPage />></div>
 <div style={{ display: isAuthenticated ? "none" : "" }}><Search /> </div>*/}