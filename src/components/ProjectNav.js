import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectNav = () => {
	
    const [scrollPos, setScrollPos] = useState(document.scrollingElement.scrollTop);

    useEffect (()=>{
        const setPos = () => {
            setScrollPos(document.scrollingElement.scrollTop)
        }
        document.addEventListener("scroll", setPos)
        return () => {
            document.removeEventListener("scroll", setPos)
        }
    },[document.scrollingElement.scrollTop])

    return (
        <div id="project-nav">
            <ul>
                <li style={{left: (-Math.cos(scrollPos * 0.004) * 40)}}></li>
                <li style={{left: (Math.cos(scrollPos * 0.004) * 50)}}></li>
                <li style={{left: (Math.sin(scrollPos * 0.004) * 60)}}></li>
            </ul>
        </div>
    )

}

export default ProjectNav