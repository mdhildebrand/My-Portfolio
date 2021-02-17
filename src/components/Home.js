import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';
import { about } from '../data/about';
import backgroundWave from '../images/backgroundWave.png';

const Home = () => {

    

    return (
        <main>
            <div id="background" /*style={{top: scrollHeight}}*/ />
            <div id="wave-container">
                <img src={backgroundWave}
                     id="background-wave" />
                <div id="background-fill" />
            </div>
            <Nav />
            {/*<SineWave />*/}
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