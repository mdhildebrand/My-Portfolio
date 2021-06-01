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
            <p id="contact-link" onClick={() => contactHide()}>Contact</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
            </svg>
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