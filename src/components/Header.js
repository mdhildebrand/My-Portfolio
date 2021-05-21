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
            <Link to={'/#welcome-section'} id="nav-home" className="current">
                <p>Home</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
            </Link>
            <Link to="/#projects-section" id="nav-works">
                <p>Works</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-files" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                    <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                </svg>
            </Link>
            <Link to="/#about-section" id="nav-about">
                <p>About</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                    <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
            </Link>
        </div>
    )
}

export default Header