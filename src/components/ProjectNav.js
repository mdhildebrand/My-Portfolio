import { NavLink } from 'react-router-dom';

const ProjectNav = () => {

    return (
        <div id="project-nav">
            <ul>
                <NavLink to={'/'}><li><span id="leftSlash"></span><span id="rightSlash"></span></li></NavLink>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )

}

export default ProjectNav