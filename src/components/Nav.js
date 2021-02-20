import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export const Nav = () => {
	
    const [scrollPos, setScrollPos] = useState("top");
    const aboutPos = window.document.body.offsetHeight - (window.innerHeight * 1.8);

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= window.innerHeight && scrolled < aboutPos){
               setScrollPos("middle")
            } else if (scrolled >= (aboutPos)){
               setScrollPos("bottom")
            } else {
                setScrollPos("top")
            }
        })
    },[document.scrollingElement.scrollTop])

    return (
        <nav id="nav-id">
            <ul>
                <li><Link to={"#welcome-section"}>{ scrollPos == "top" ? <li className="currentPos"></li> : <li className="nav-link"></li> }</Link></li>                
                <span></span>
                <li><Link to={"#projects-section"}>{ scrollPos == "middle" ? <li className="currentPos"></li> : <li className="nav-link"></li> }</Link></li>
                <span></span>
                <li><Link to={"#about-section"}>{ scrollPos == "bottom" ? <li className="currentPos"></li> : <li className="nav-link"></li> }</Link></li>
            </ul>
        </nav>
    )  
};

export default Nav;