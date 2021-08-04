import React, { useState } from 'react';
import '../../assets/css/style.css';

function Home() {
    return(
        <div class="container p-1 pt-4" id="about-me">
            <h2 class="mt-0 text-center">About Me</h2>
            <div class="media">
                <img src="../assets/images/about-me/Headshot.jpg" class="align-self-center mr-3" alt="headshot"/>
                <div class="media-body">
                    <p>
                        Hi There! Thanks for visiting my portfolio. My name is Emilio and I'm a chemical engineer (and
                        amateur developer) based in Panama. I'm interested in data science, back-end development,
                        marketing technology (MarTech). I'm currently learning full-stack web development, and this
                        portfolio showcases all the cool projects I've been working on.
                    </p>
                    <p>
                        Let's connect! Below you'll find my resume and different ways to contact me. Please reach out if
                        you have any questions about my portfolio or if you want to connect professionally.
                        Cheers!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;