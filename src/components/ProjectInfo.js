import { projects } from '../data/projects';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectNav from '../components/ProjectNav';
import { SRLWrapper } from 'simple-react-lightbox';

const ProjectInfo = () => {   

    const { id } = useParams();
    const projectArray = projects[id] 

    useEffect (() => {
        window.scrollTo(0,0)
    },[])
    
    return (
        <main id="project-info-page">
            <ProjectNav />
            <div id="project-wrapper">
                <img src={projectArray.headerImg} id="project-header-img" />
                <section id="project-intro">
                    <h1>{projectArray.project}</h1>
                    <div className="underline"></div>
                    <h4>{projectArray.briefDescription}</h4>
                </section>
                <div id="project-intro-description">
                    <article id="code-and-tools">
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
                    </article>
                    <article id="project-description">
                            <p>{projectArray.description}</p>
                    </article>
                </div>
                <section id="project-process">
                    { projectArray.planning &&
                        <article>
                            <h3>Planning and Design</h3>
                            <span></span>
                            {projectArray.planning.split('\n').map((str, i) => <p key={i}>{str}</p>)}
                        </article>
                    }
                    { projectArray.planningImage &&
                        <SRLWrapper>
                            <img src={projectArray.planningImage} />
                        </SRLWrapper>
                    }
                </section>
                <section id="project-development">
                    { projectArray.development &&
                        <article>
                            <h3>Development Process</h3>
                            <span></span>
                            {projectArray.development.split('\n').map((str, i) => <p key={i}>{str}</p>)}
                        </article>
                    }
                    { projectArray.developmentImage &&
                        <SRLWrapper>
                            <img src={projectArray.developmentImage} />
                        </SRLWrapper>
                    }
                </section>
                <section id="project-reflections">
                    <h3>Reflections</h3>
                    <span></span>
                    {projectArray.reflections.split('\n').map((str, i) => <p key={i}>{str}</p>)}
                </section>
                <nav id="project-links">
                    <a href={projectArray.liveSite}><button type="button">Live Site</button></a>
                    <a href={projectArray.github}><button type="button">Github</button></a>
                </nav>
            </div>
        </main>
    )
}

export default ProjectInfo