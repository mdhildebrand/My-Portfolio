import { about } from '../data/about';


const Contact = () => {


    return (
        <section id="contact-section">
            <img src="#0" alt="image to go here" />
            <article id="contact-article">
                <h1>{about[0].contactHeader}</h1>
                <p>{about[0].contactText}</p>
                <p>Matt Hildebrand</p>
                <p>hildebrand.matt@gmail.com</p>
                <ul id="contact-links">
                    <li><a href="#0"><img src="#0" alt="Linkedin logo" /><p>Linkedin</p></a></li>
                    <li><a href="#0"><img src="#0" alt="Github logo" /><p>Github</p></a></li>
                    <li><a href="#0"><img src="#0" alt="Codepen logo" /><p>Codepen</p></a></li>
                </ul>
            </article>
        </section>
    )
}

export default Contact