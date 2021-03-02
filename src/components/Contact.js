import { about } from '../data/about';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import codepen from '../images/codepen.png';


const Contact = () => {


    return (
        <article id="contact-article">
            <div>
                <h1>{about[0].contactHeader}</h1>
                <p>{about[0].contactText}</p>
                <a href="mailto:hildebrand.matt@gmail.com">hildebrand.matt@gmail.com</a>
                <ul id="contact-links">
                    <li><a href="https://www.linkedin.com/in/matt-hildebrand-a75584204/"><img src={linkedin} alt="Linkedin logo" /><p>Linkedin</p></a></li>
                    <li><a href="https://github.com/hildebrandmatt"><img src={github} alt="Github logo" /><p>Github</p></a></li>
                    <li><a href="https://codepen.io/hildebrandmatt"><img src={codepen} alt="Codepen logo" /><p>Codepen</p></a></li>
                </ul>
            </div>
        </article>
    )
}

export default Contact