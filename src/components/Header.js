import React from "react";
import '../App.css';

function Header() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#about-me">
                                    About Me
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#work">
                                    Work
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#resume">
                                    Resume
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
