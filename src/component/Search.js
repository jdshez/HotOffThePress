import React from 'react';
import Searchbar from './Searchbar';
import { useAuth0 } from '@auth0/auth0-react';
import NewsList from './NewsList';
 
const Search = (exc) => {
    const { isAuthenticated } = useAuth0();
    
   
        
     return ( 
        isAuthenticated && (
        <div className='main container'>
            <Searchbar />
            <NewsList />
        </div>
         )
      )
 }
  
 export default Search;