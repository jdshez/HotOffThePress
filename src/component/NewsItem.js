import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ blog }) => {
    return ( 
        
        <div className="col s12 news-item-ctr">
            <div className="card hoverable">
                <div className="card-image">
                    <img loading="lazy" src={blog.image}></img>
                    
                </div>
                <div className="card-content valign-wrapper">
                    <p className="">{blog.title}</p>
                </div>
                <div className="card-action">
                    <Link className="blog" to={{
                        pathname: `/fullstory/${blog.publishedAt}`, 
                        state: { blog },
                        }} >Read more here...</Link>
                </div>
            </div>
        </div>
        
     );
}
 
export default NewsItem;
{/*
        <div>
            <Link className="blog" to="/">
                <img className="" src={blog.image} />
                <div>
                    <h3 className="sourceName">
                        <span>{blog.source.name}</span>
                        <p>{blog.publishedAt}</p>
                    </h3>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                </div>
            </Link>
        </div>
*/}