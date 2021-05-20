import { about } from '../data/about';
import LogoLinkedin from '../components/LogoLinkedin';
import LogoGithub from '../components/LogoGithub';
import LogoCodepen from '../components/LogoCodepen';
import { useState } from 'react';


const Contact = () => {

    const [ hideContact, setHideContact ] = useState(true);

    const contactHide = () => {
        setHideContact(!hideContact);
        console.log("hide");
    }

    return (
        <section id="contact-section">
            <p onClick={() => contactHide()}>Contact</p>
            { !hideContact && 
                <div id="contact-background" onClick={() => contactHide()}>
                    <article id="contact-article" onClick={(e) => e.stopPropagation()}>
                        <h1>{about[0].contactHeader}</h1>
                        <div id="close-contact-button" onClick={() => contactHide()}>
                            <span></span>
                            <span></span>
                        </div>
                        <p>{about[0].contactText}</p>
                        <a href="mailto:hildebrand.matt@gmail.com">hildebrand.matt@gmail.com</a>
                        <ul id="contact-links">
                            <li>
                                <a href="https://www.linkedin.com/in/matt-hildebrand-a75584204/" target="_blank">
                                    <LogoLinkedin />
                                    <p>Linkedin</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/hildebrandmatt" target="_blank">
                                    <LogoGithub />
                                    <p>Github</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://codepen.io/hildebrandmatt" target="_blank">
                                    <LogoCodepen />
                                    <p>Codepen</p>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            }
            
        </section>
    )
}

export default Contact