import { projects } from '../data/projects';
import { useParams } from 'react-router-dom';
import ContactButton from '../components/ContactButton';
import ProjectNav from '../components/ProjectNav';

const ProjectInfo = () => {

    const { id } = useParams();
    const projectArray = projects[id]
    
    return (
        <main>
            <div id="project-wrapper">
                <ProjectNav />
                <section id="project-intro">
                    <img src={projectArray.screenshotURL} />
                    <h1>{projectArray.project}</h1>
                    <span></span>
                    <h2>{projectArray.briefDescription}</h2>
                </section>
                <section id="skills-and-tools">
                    <section id="skills-section">
                        <h4>Skills</h4>
                        <ul id="skills-list">
                        {projectArray.skills.map((project) => {
                            return (
                                <li key={project}>{project}</li>
                            );
                        })}
                        </ul>
                    </section>
                    <section id="tools-section">
                        <h4>Tools</h4>
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
                { projectArray.process &&
                    <section id="project-process">
                        <h3>Development Process</h3>
                        <span></span>
                        <p>{projectArray.process}</p>
                        <img src={projectArray.processImage} />
                    </section>
                }
                { projectArray.codeSnippet &&
                    <section id="project-codesnippet">
                        <h3>Code Snippets</h3>
                        <span></span>
                        <p>{projectArray.codeSnippet}</p>
                        <img src={projectArray.snippetImage} />
                    </section>
                }
                <section id="project-reflections">
                    <h3>Reflections</h3>
                    <span></span>
                    <p>{projectArray.reflections}</p>
                </section>
                <nav id="project-nav">
                    <a href={projectArray.liveSite}><button type="button">Live Site</button></a>
                    <a href={projectArray.github}><button type="button">Github</button></a>
                </nav>
            </div>
            <div id="return-to-top">
                <p>^</p>
            </div>
            <ContactButton />
        </main>
    )
}

export default ProjectInfo