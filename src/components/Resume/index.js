import React, { useState } from "react";
import "../assets/css/style.css";
import resume from "../assets/resume/RESUME.pdf";

function Resume() {
  return (
    <>
      <div class="container p-1 pt-4" id="resume">
        <h2 class="text-center">Resume</h2>
        <p>
          I've had a peculiar career path, which is reflected in my resume and
          LinkedIn. My academic background is in chemical engineering, and I
          have worked in consulting, procurement, and most recently data
          analytics. I'm always interested in solving new problems and facing
          new challenges.
        </p>
        <p>
          I'm currently enrolled on a full-stack web development bootcamp to
          further hone my programming skills, and apply this knowledge to my
          everyday work. By the end of 2021, I expect to be profecient in: HTML,
          CSS, JavaScript, APIs, Node.js, OOP, SQL, and React.
        </p>
        <p>
          You can view my latest resume below or download a copy{" "}
          <a href={resume} download="Resume-EmilioPascual" target="_blank">
            here
          </a>
          .
        </p>
        <div class="row justify-content-center">
          <iframe
            title="resumePDF"
            src={resume}
            width="90%"
            height="500px"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Resume;
