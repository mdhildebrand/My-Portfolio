import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export const Nav = () => {
	
    const [scrollPos, setScrollPos] = useState("top");
    const aboutPos = window.document.body.offsetHeight - (window.innerHeight * 1.8);

    useEffect (()=>{
        const checkScroll = () => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= (window.innerHeight * 0.8) && scrolled < aboutPos){
               setScrollPos("middle")
            } else if (scrolled >= (aboutPos)){
               setScrollPos("bottom")
            } else {
                setScrollPos("top")
            }
        }
        document.addEventListener("scroll", checkScroll)
        return () => {
            document.removeEventListener("scroll", checkScroll)
        }
    },[document.scrollingElement.scrollTop])

    return (
        <nav id="nav-id">
            <ul>
                <li><Link to={"#welcome-section"}></Link></li>  
                { scrollPos == "top" ? <li className="currentPos nav-link nav-top"></li> : <li className="nav-link nav-top"></li> }              
                <span></span>
                <li><Link to={"#projects-section"}></Link></li>
                { scrollPos == "middle" ? <li className="currentPos nav-link nav-middle"></li> : <li className="nav-link nav-middle"></li> }
                <span></span>
                <li><Link to={"#about-section"}></Link></li>
                { scrollPos == "bottom" ? <li className="currentPos nav-link nav-bottom"></li> : <li className="nav-link nav-bottom"></li> }
            </ul>
        </nav>
    )  
};

export default Nav;