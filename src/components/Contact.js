import { about } from '../data/about';
import LogoLinkedin from '../components/LogoLinkedin';
import LogoGithub from '../components/LogoGithub';
import LogoCodepen from '../components/LogoCodepen';


const Contact = () => {


    return (
        <article id="contact-article">
            <div>
                <h1>{about[0].contactHeader}</h1>
                <p>{about[0].contactText}</p>
                <a href="mailto:hildebrand.matt@gmail.com">hildebrand.matt@gmail.com</a>
                <ul id="contact-links">
                    <li>
                        <a href="https://www.linkedin.com/in/matt-hildebrand-a75584204/">
                            <LogoLinkedin />
                            <p>Linkedin</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hildebrandmatt">
                            <LogoGithub />
                            <p>Github</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/hildebrandmatt">
                            <LogoCodepen />
                            <p>Codepen</p>
                        </a>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default Contact