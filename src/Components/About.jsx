import React from "react";

function About() {
  return (
    <section className="main-container about">
      <div className="s2">
        <h2>About Me</h2>

        <div className="info-grid">
          <img
            className="logo"
            id="profile-pic"
            src="/profile_pic.png"
            alt="emacs"
          />
          <div className="me">
            <h3>Who I am</h3>
            <p>
              I am a highschool student first, developper second and co-lead for
              my school's hackclub. My love for Vim and Emacs are unparalleled.
              As the co-lead, I spend most of my time there teaching the newer
              kids how to program. I enjoy minimalism and try to make my
              codebase as small as practically possible.
            </p>
          </div>
          <div className="knowledge">knowledge</div>
          <div className="projects">projects</div>
        </div>
      </div>
    </section>
  );
}

export default About;
