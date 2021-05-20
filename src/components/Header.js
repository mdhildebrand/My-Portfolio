import { HashLink as Link } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';

const Header = () => {
	
    const [scrollPos, setScrollPos] = useState("nav-home");

    useEffect (()=>{
        const checkScroll = () => {
            document.getElementById("nav-home").classList.remove("current")
            document.getElementById("nav-works").classList.remove("current")
            document.getElementById("nav-about").classList.remove("current")
            if( window.location.pathname == '/' ) {
                let scrolled = document.scrollingElement.scrollTop;
                let homePos = document.getElementById("welcome-section").clientHeight - 120
                let workPos = homePos + document.getElementById("projects-section").clientHeight
                if ( scrolled < homePos ) {
                    setScrollPos("nav-home")
                } else if (scrolled < workPos ) {
                    setScrollPos("nav-works")
                } else {
                    setScrollPos("nav-about")
                }
                document.getElementById(scrollPos).classList.add("current")
            }
        }
        document.addEventListener("scroll", checkScroll)
        checkScroll()
        return () => {
            document.removeEventListener("scroll", checkScroll)
        }
    },[document.scrollingElement.scrollTop])

    return (
        <div id="header-bar">
            <Link to={'/#welcome-section'} id="nav-home" className="current"><p>Home</p></Link>
            <Link to="/#projects-section" id="nav-works"><p>Works</p></Link>
            <Link to="/#about-section" id="nav-about"><p>About</p></Link>
        </div>
    )
}

export default Header