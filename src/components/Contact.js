import React, { useState } from 'react';
import '../App.css';

function Contact() {
    let emailURL = 'mailto:ejpascualj@gmail.com';
    let linkedinURL = 'https://linkedin.com/in/ejpascualj';
    let githubURL = 'https://github.com/ejpascualj';
    return(
        <div class="container p-1 pt-4" id="contact">
            <h2 class="text-center">Contact Information</h2>
            <p>Let's connect! Feel free to reach out in any of the following ways:</p>
            <ul>
                <li>Email: <a href={emailURL}>ejpascualj@gmail.com</a></li>
                <li>Phone: (+507) 6025-4183</li>
                <li>LinkedIn: <a href={linkedinURL}
                        target="_blank">linkedin.com/in/ejpascualj</a></li>
                <li>GitHub: <a href={githubURL} target="_blank">@ejpascualj</a></li>
            </ul>
        </div>
    );
}

export default Contact;