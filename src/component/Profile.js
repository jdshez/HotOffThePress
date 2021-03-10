import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const Profile = () => {
const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="chip">
                <img src={user.picture} alt={user.name} />
                {user.name}
            </div>
        )
    )
}

export default Profile

