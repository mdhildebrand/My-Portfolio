import { NavLink } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectList = () => {

    const projectList = Object.values(projects)

    return (
        <section id="projects-section">
            {projectList.map((project) => {
                return (
                    <div className="project-div" key={project.id}>
                        <img src={project.screenshotURL} alt="Screenshot of the project" />
                        <article className="project-info">
                            <h2>{project.project}</h2>
                            <p>{project.landingDescription}</p>
                            <div className="button-container">
                                <a href={project.liveSite}><button type="button">Live Site</button></a>
                                <NavLink to={'/project/' + project.id}><button type="button">More Info</button></NavLink>
                            </div>
                        </article>
                    </div>
                );
            })}
        </section>
    )
}

export default ProjectList;