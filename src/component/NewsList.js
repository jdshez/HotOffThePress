import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import axios from "axios";
import NewsItem from './NewsItem';

const NewsList = () => {

    const { searchValue } = useContext(SearchContext);
    //const searchV = `"${searchValue}"`;
    
    const url = `https://gnews.io/api/v4/search?q=${searchValue}&lang=en&token=6903c39281ce61748f65674fad19538e`
    //const url = `https://gnews.io/api/v4/${searchValue}?lang=en&token=6903c39281ce61748f65674fad19538e`
    console.log(url);
    const [blogs, setBlogs] = useState('null');
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            //return response.data.json();
            //console.log(response.data);
            setBlogs(response.data);
            setLoading(false);
            //console.log( blogs.articles.map(blog => blog.source.name));
        })
        /*.then((x) => {
            setBlogs(x);
            console.log(x);
        })*/
        .catch(error => {
            console.log(error.message)
        });

        //return () => console.log('cleanup');
    }, [searchValue])
    
    return (
        <div className="row news-list-ctr">
        { isLoading && <div>Loading...</div>}
        <div className="col l11 offset-l1"> {/* new centralising cards at l screen */}
            { blogs?.articles?.length ? 
            ( blogs?.articles?.map((blog) => {
                return ( <NewsItem key={blog.url} blog={blog} /> )})) : <div>No results, please try again</div> 
            }
            
        </div>
        </div>
    )
}
 
export default NewsList;