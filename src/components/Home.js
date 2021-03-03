import Nav from '../components/Nav';
import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';
import { about } from '../data/about';
import backgroundWave from '../images/backgroundWave.png';
import introImage from '../images/introImage.png';
import aboutImage from '../images/aboutImage.png';

const Home = () => {    

    return (
        <main>
            <div id="background" />
            <div id="wave-container">
                <img src={backgroundWave}
                     id="background-wave" />
                <div id="background-fill" />
            </div>
            <Nav />
            <div id="landing-wrapper">
                <section id="welcome-section">
                    <img src={introImage} alt="illustration of the developer" />
                    <article id="welcome-article">
                        <h1>{about[0].welcome}</h1>
                        <p>{about[0].intro}</p>
                    </article>
                </section>
                <ProjectList />
                <section id="about-section">
                    <img src={aboutImage} alt="image to go here" />
                    <article id="about-article">
                        <h1>{about[0].aboutHeader}</h1>
                        {about[0].aboutText.split('\n').map((str, i) => <p key={i}>{str}</p>)}
                        <h2>{about[0].skillsHeader}</h2>
                        <section id="about-skills">
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
                        </section>
                    </article>
                </section>
                <Contact />
            </div>
        </main>
    )
}

export default Home