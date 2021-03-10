import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({size}) => {
const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <>
        {!isAuthenticated ? 
            <button className={`waves-effect waves-light btn${size}`} onClick={() => loginWithRedirect()}>
                Log In
            </button> : 
            <button className={`waves-effect waves-light btn${size}`} onClick={() => logout()}>
                Log Out
            </button>
        }   
        </>
    )
}

export default LoginButton
{/*"waves-effect waves-light btn" */}