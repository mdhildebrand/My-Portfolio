import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';
import { about } from '../data/about';
import SineWave from '../utilities/sinewave';

const Home = () => {    

    const [scrollHeight, setScrollHeight] = useState(window.pageYOffset)

    useEffect(() => {
        function backgroundScroll() {            
            setScrollHeight(window.pageYOffset / 2)

        }
        window.addEventListener("scroll", backgroundScroll);
        return () => {
            window.removeEventListener("scroll", backgroundScroll);
        };
    })



    

    return (
        <main>
            <div id="background" style={{top: scrollHeight}} />
            <Nav />
            <SineWave />
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
                        <p>{about[0].aboutText.split('\n').map(str => <p>{str}</p>)}</p>
                    </article>
                </section>
                <Contact />
            </div>
        </main>
    )
}

export default Home