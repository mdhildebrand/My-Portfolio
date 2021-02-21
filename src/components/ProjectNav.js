import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectNav = () => {
	
    const [scrollPos, setScrollPos] = useState(document.scrollingElement.scrollTop);
    const [colorOne, setColorOne] = useState("#5555ff")
    const [colorTwo, setColorTwo] = useState("#8260f4")
    const [colorThree, setColorThree] = useState("#b06ce8")
    const [colorFour, setColorFour] = useState("#dd77dd")

    const blue = "5555ff"
    const pink = "dd77dd"
    const midColor = "9966ee"

    var color = "#" + Math.round(((Math.sin(scrollPos * 0.01) * 68) + 153)).toString(16) + Math.round(((Math.sin(scrollPos * 0.01) * 17) + 102)).toString(16) + Math.round(((Math.sin(scrollPos * 0.01) * 17) + 238)).toString(16)

    console.log(color)

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            setScrollPos(document.scrollingElement.scrollTop)

            setColorOne("#" + Math.round(((-Math.cos(document.scrollingElement.scrollTop * 0.005) * 68) + 153)).toString(16) + Math.round(((-Math.cos(document.scrollingElement.scrollTop * 0.005) * 17) + 102)).toString(16) + Math.round(((-Math.cos(document.scrollingElement.scrollTop * 0.005) * 17) + 238)).toString(16))

            setColorTwo("#" + Math.round(((-Math.sin((document.scrollingElement.scrollTop + 50) * 0.005) * 68) + 153)).toString(16) + Math.round(((-Math.sin((document.scrollingElement.scrollTop + 50) * 0.005) * 17) + 102)).toString(16) + Math.round(((-Math.sin((document.scrollingElement.scrollTop + 50) * 0.005) * 17) + 238)).toString(16))

            setColorThree("#" + Math.round(((-Math.sin((document.scrollingElement.scrollTop - 50) * 0.005) * 68) + 153)).toString(16) + Math.round(((-Math.sin((document.scrollingElement.scrollTop - 50) * 0.005) * 17) + 102)).toString(16) + Math.round(((-Math.sin((document.scrollingElement.scrollTop - 50) * 0.005) * 17) + 238)).toString(16))

            setColorFour("#" + Math.round(((Math.cos(document.scrollingElement.scrollTop * 0.005) * 68) + 153)).toString(16) + Math.round(((Math.cos(document.scrollingElement.scrollTop * 0.005) * 17) + 102)).toString(16) + Math.round(((Math.cos(document.scrollingElement.scrollTop * 0.005) * 17) + 238)).toString(16))
        })        
    },[document.scrollingElement.scrollTop])

    return (
        <div id="project-nav">
            <ul>
                <NavLink to={'/'}>
                    <li style={{left: (Math.sin(scrollPos * 0.01) * 18), background: colorOne}}>
                        <span id="leftSlash"></span>
                        <span id="rightSlash"></span>
                    </li>
                </NavLink>
                <li style={{ left: (-Math.cos(scrollPos * 0.01) * 18), background: colorTwo}}></li>
                <li style={{left: (Math.cos(scrollPos * 0.01) * 18), background: colorThree}}></li>
                <li style={{left: (Math.sin(scrollPos * 0.01) * 18), background: colorFour}}></li>
            </ul>
        </div>
    )

}

export default ProjectNav