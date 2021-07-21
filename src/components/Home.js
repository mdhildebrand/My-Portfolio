//import Nav from '../components/Nav';
//import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';
import { about } from '../data/about';
//import introImage from '../images/introImage.png';
import aboutImage from '../images/introImage.png';

const Home = () => {    

    return (
        <main>
            <div id="landing-wrapper">
                <section id="welcome-section">
                    <div className="bubble-one" />
                    <div className="bubble-two" />
                    <div className="bubble-three" />
                    {/*<img src={introImage} alt="illustration of the developer" />*/}
                    <article id="welcome-article">
                        <h1>{about[0].welcome}</h1>
                        <p>{about[0].intro.split('\n').map((str, i) => <p key={i}>{str}</p>)}</p>
                    </article>
                </section>
                <svg className="section-div" viewBox="0 0 400 10">
                    <polygon points="200,0 400,5 200,10 0,5" />
                </svg>

                <ProjectList />
                <svg className="section-div" viewBox="0 0 400 10">
                    <polygon points="200,0 400,5 200,10 0,5" />
                </svg>
                <section id="about-section">
                    <img src={aboutImage} alt="image to go here" />
                    <article id="about-article">
                        <h1>{about[0].aboutHeader}</h1>
                        {about[0].aboutText.split('\n').map((str, i) => <p key={i}>{str}</p>)}
                        <div id="about-frame-top"></div>
                        <div id="about-frame-bot"></div>
                    </article>
                    <article id="skills-article">
                        <h2>{about[0].skillsHeader}</h2>
                        <div id="about-skills">
                            <ul>
                            {about[0].codeSkills.map((skills) => {
                                return (
                                    <li key={skills}>{skills}</li>
                                );
                            })}
                            </ul>
                            <ul>
                            {about[0].desSkills.map((skills) => {
                                return (
                                    <li key={skills}>{skills}</li>
                                );
                            })}
                            </ul>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    )
}

export default Home