import { projects } from '../data/projects';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import ProjectNav from '../components/ProjectNav';
import Contact from '../components/Contact';

const ProjectInfo = () => {

    const [ hideContact, setHideContact ] = useState(true);

    const { id } = useParams();
    const projectArray = projects[id]

    const contactHide = () => {
        setHideContact(!hideContact);
    }

    useEffect (() => {
        window.scrollTo(0,0)
    },[])
    
    return (
        <main id="project-info-page">
            <img src={projectArray.screenshotURL}       id="project-header-img" />
            <ProjectNav />
            <div id="project-wrapper">
                <section id="project-intro">
                    <h1>{projectArray.project}</h1>
                    <div className="underline"></div>
                    <h4>{projectArray.briefDescription}</h4>
                </section>
                <section id="code-and-tools">
                    <section id="code-section">
                        <ul id="code-list">
                        {projectArray.code.map((project) => {
                            return (
                                <li key={project}>{project}</li>
                            );
                        })}
                        </ul>
                    </section>
                    <section id="tools-section">
                        <ul id="tools-list">
                        {projectArray.tools.map((project) => {
                            return (
                                <li key={project}>{project}</li>
                            );
                        })}
                        </ul>
                    </section>
                </section>
                <article id="project-description">
                        <p>{projectArray.description}</p>
                </article>
                { projectArray.planning &&
                    <section id="project-process">
                        <h3>Planning and Design</h3>
                        <span></span>
                        <p>{projectArray.planning.split('\n').map(str => <p>{str}</p>)}</p>
                        <img src={projectArray.planningImage} />
                    </section>
                }
                { projectArray.development &&
                    <section id="project-development">
                        <h3>Development Process</h3>
                        <span></span>
                        <p>{projectArray.development.split('\n').map(str => <p>{str}</p>)}</p>
                        <img src={projectArray.developmentImage} />
                    </section>
                }
                <section id="project-reflections">
                    <h3>Reflections</h3>
                    <span></span>
                    <p>{projectArray.reflections.split('\n').map(str => <p>{str}</p>)}</p>
                </section>
                <nav id="project-links">
                    <a href={projectArray.liveSite}><button type="button">Live Site</button></a>
                    <a href={projectArray.github}><button type="button">Github</button></a>
                </nav>
                <Link to={"#project-info-page"} id="top-link">
                    <div id="return-to-top">
                        <p>^</p>
                    </div>
                </Link>
                <section id="contact-section">
                    <button onClick={() => contactHide()}>Contact</button>
                </section>
            </div>
            { hideContact ? (
                <div id="contact-hidden">
                    <Contact />
                </div>
            ) : (
                <div>
                    <Contact />
                </div>
            ) }
        </main>
    )
}

export default ProjectInfo