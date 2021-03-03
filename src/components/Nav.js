import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export const Nav = () => {
	
    const [scrollPos, setScrollPos] = useState("top");

    useEffect (()=>{
        const checkScroll = () => {
            let projectPos = document.getElementById("welcome-section").clientHeight - 150;
            let aboutPos = document.getElementById("welcome-section").clientHeight
                         + document.getElementById("projects-section").clientHeight
                         - 150;
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= projectPos && scrolled < aboutPos){
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
                <Link to={"#welcome-section"}><li></li></Link>  
                { scrollPos == "top" ? <li className="currentPos nav-link nav-top"></li> : <li className="nav-link nav-top"></li> }              
                <span></span>
                <Link to={"#projects-section"}><li></li></Link>
                { scrollPos == "middle" ? <li className="currentPos nav-link nav-middle"></li> : <li className="nav-link nav-middle"></li> }
                <span></span>
                <Link to={"#about-section"}><li></li></Link>
                { scrollPos == "bottom" ? <li className="currentPos nav-link nav-bottom"></li> : <li className="nav-link nav-bottom"></li> }
            </ul>
        </nav>
    )  
};

export default Nav;