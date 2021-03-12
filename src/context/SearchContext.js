import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [searchValue, setSearchValue] = useState('world');
    const changeSearch = (userInput) => {
        setSearchValue(userInput);
    }

    return (
        <SearchContext.Provider value={{searchValue, changeSearch}}>
            { props.children }
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;