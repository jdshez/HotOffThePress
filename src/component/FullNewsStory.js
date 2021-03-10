import { Link, useParams } from "react-router-dom";
import React, { useEffect, Component } from 'react';
import { useLocation } from "react-router-dom"

{/*class FullNewsStory extends Component {
    state = {  }

    componentDidMount () {
        
        console.log(this.props)
    }
    render() { 
        return ( 
            <div>hi</div>
         );
    }
}
 
export default FullNewsStory;*/}

const FullNewsStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    const location = useLocation()
    const story = location.state;  
    console.log(location.state);
    {/*const{ story } = blog.location.state;
const { id } = useParams();*/}

    return ( 
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="main-article col l8 s12">
                            <h4>{story?.blog.title}</h4>
                            <img className="responsive-img z-depth-2" src={story?.blog.image}></img>
                            
                        <article className="z-depth-2">
                            <blockquote className="">{story?.blog.description}</blockquote>
                            <div className="article-text ">{story?.blog.content}</div>
                            <div className="article-link" ><a target='#' href={story?.blog.url}>Go to full article</a>
                            </div>
                        </article>
                        
                    </div>
                    <div className="info-card-ctr col l4 s12">
                        <div className="card-panel">
                            <h5>Details</h5>
                            <div class="divider"></div>
                            
                            <p className="">Published by:  <span className="info-card-details">{story?.blog.source.name}</span> @ <span className="info-card-details">{story?.blog.publishedAt}</span></p>
                            {/*<p className="">{`${story?.blog.source.name} at ${story?.blog.publishedAt}`}</p>*/}
                            <p>URL:  <a className="info-card-link" target='#' href={story?.blog.url}> {`  ${story?.blog.url}`}</a></p>
                            <div class="divider"></div>

                        {/*blog id is {story.blog.title}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FullNewsStory;