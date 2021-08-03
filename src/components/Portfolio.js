import React from 'react';
import '../App.css';

function Portfolio() {
    return(
        <div class="container p-1 pt-4" id="work">
            <h2 class="text-center">Work</h2>
            {/*FEATURED CARD */}
            <div class="row d-flex justify-content-center p-2">
                <div class="card" style="width: 66rem;"> 
                    <img src="../assets/images/work/peso-dolar.jpg" class="" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">BM Trade Analysis</h5>
                        <p class="card-text">Provides real-time data for the USD/MXN exchange rate, related news, and
                            historical trends to allow traders to make informed decisions. This project was done in
                            collaboration with GitHub users danrub98, betovaldez, and andresplasenciaborja.</p>
                        <a href="https://ejpascualj.github.io/BM-Trade-Analysis/" target="_blank"
                            class="btn btn-primary">Let's
                            Trade!</a>
                        <a href="https://github.com/ejpascualj/BM-Trade-Analysis" target="_blank"
                            class="btn btn-secondary">Repo</a>
                    </div>
                </div>
            </div>

            <div class="row d-flex justify-content-center p-2">
                {/*CARD 01 */}
                <div class="col-sm p-1 d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="../assets/images/work/weather.jpg" class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <p class="card-text">
                                Displays the current weather for a city and the forecast for the upcoming week using
                                Open Weather Map API, and locally stores your latest searches.
                            </p>
                            <a href="https://ejpascualj.github.io/weather-dashboard/" target="_blank"
                                class="btn btn-primary">How's the weather?</a>
                            <a href="https://github.com/ejpascualj/weather-dashboard" target="_blank"
                                class="btn btn-secondary">Repo</a>
                        </div>
                    </div>
                </div>
                {/*CARD 02 */}
                <div class="col-sm p-1 d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="../assets/images/work/password.jpg" class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Password Generator</h5>
                            <p class="card-text">
                                Generates a random password based on user input, ranging between 8 and 128 characters,
                                and containing uppercase, lowercase, numbers, and special characters.
                            </p>
                            <a href="https://ejpascualj.github.io/password-generator/" target="_blank"
                                class="btn btn-primary">Generate
                                a Password!</a>
                            <a href="https://github.com/ejpascualj/password-generator" target="_blank"
                                class="btn btn-secondary">Repo</a>
                        </div>
                    </div>
                </div>
                {/*CARD 03 */}
                <div class="col-sm p-1 d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="../assets/images/work/quiz.png" class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Coding Quiz</h5>
                            <p class="card-text">
                                Timed and interactive javascript coding quiz with multiple choice question, coded in
                                html and javascript and designed using bootstrap.
                            </p>
                            <a href="https://ejpascualj.github.io/code-quiz/" target="_blank"
                                class="btn btn-primary">Quiz your JS!</a>
                            <a href="https://github.com/ejpascualj/code-quiz" target="_blank"
                                class="btn btn-secondary">Repo</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;