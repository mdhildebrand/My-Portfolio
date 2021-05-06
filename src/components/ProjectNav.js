import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectNav = () => {

    const sineColor = (adjust) => {
        var color = "#" +
            Math.round(((-Math.cos((document.scrollingElement.scrollTop * 0.007) + adjust) * 68) + 153)).toString(16) +
            Math.round(((-Math.cos((document.scrollingElement.scrollTop * 0.007) + adjust) * 17) + 102)).toString(16) +
            Math.round(((-Math.cos((document.scrollingElement.scrollTop * 0.007) + adjust) * 17) + 238)).toString(16)

        return color
    }
	
    const [scrollPos, setScrollPos] = useState(document.scrollingElement.scrollTop);
    const [colorOne, setColorOne] = useState(sineColor(0))
    const [colorTwo, setColorTwo] = useState(sineColor(1.14))
    const [colorThree, setColorThree] = useState(sineColor(2))
    const [colorFour, setColorFour] = useState(sineColor(3.14))

    useEffect (()=>{
        const setColor = () => {
            setScrollPos(document.scrollingElement.scrollTop)
            setColorOne(sineColor(0))
            setColorTwo(sineColor(1.14))
            setColorThree(sineColor(2))
            setColorFour(sineColor(3.14))
        }
        document.addEventListener("scroll", setColor)
        return () => {
            document.removeEventListener("scroll", setColor)
        }
    },[document.scrollingElement.scrollTop])

    return (
        <div id="project-nav">
            <ul>
                <NavLink to={'/'}>
                    <li style={{left: (Math.sin(scrollPos * 0.007) * 10), background: colorOne}}>
                        <span id="leftSlash"></span>
                        <span id="rightSlash"></span>
                    </li>
                </NavLink>
                <li style={{ left: (-Math.cos(scrollPos * 0.007) * 10), background: colorTwo}}></li>
                <li style={{left: (Math.cos(scrollPos * 0.007) * 10), background: colorThree}}></li>
                <li style={{left: (Math.sin(scrollPos * 0.007) * 10), background: colorFour}}></li>
            </ul>
        </div>
    )

}

export default ProjectNav