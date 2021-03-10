import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const Searchbar = () => {
    const { changeSearch } = useContext(SearchContext);

    const [search, setSearch] = useState('');
    
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(search);
        changeSearch(e.target.value)
        changeSearch(search);
        //setSearch('');
        //document.querySelector("search-form").reset();
    }

    return ( 
        <div className="section center container row">
            <form className="search-form col s12 m8 offset-m2 input-field" >
                <input className="search-box col s9" placeholder="Search for a topic" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button className="col s3 search-btn waves-effect waves-light btn" onClick={ handleClick }><i class="material-icons">search</i></button>
            </form>
        </div>
     );
}
 
export default Searchbar;