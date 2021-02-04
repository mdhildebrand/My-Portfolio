import Nav from '../components/Nav';
import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';
import { about } from '../data/about';

const Home = () => {

    return (
        <main>
            <Nav />
            <div id="landing-wrapper">
                <section id="welcome-section">
                    <img src="#0" alt="image to go here" />
                    <article id="welcome-article">
                        <h1>{about[0].welcome}</h1>
                        <p>{about[0].intro}</p>
                    </article>
                </section>
                <ProjectList />
                <section id="about-section">
                    <img src="#0" alt="image to go here" />
                    <article id="about-article">
                        <h1>{about[0].aboutHeader}</h1>
                        <p>{about[0].aboutText}</p>
                    </article>
                </section>
                <Contact />
            </div>
        </main>
    )
}

export default Home