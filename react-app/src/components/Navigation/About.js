import React, { useState, useEffect } from "react";
import { AboutModal } from "../../context/AboutModal";
import githublogo from "./githublogo.png";
import linkedinlogo from "./linkedinlogo.png";

function About() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button className="about-me" onClick={() => setShowModal(true)}>
        About
      </button>
      {showModal && (
        <AboutModal onClose={() => setShowModal(false)}>
          <div>
            <div className="external-links">
              <h2 className="name">Suwanshree</h2>
              <div className="logos-div">
                <img id="logos" src={githublogo} alt="Github" />
                <a
                  href="https://github.com/suwanshree"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
              </div>
              <div className="logos-div">
                <img id="logos" src={linkedinlogo} alt="LinkedIn" />
                <a
                  href="https://www.linkedin.com/in/suwanshree-acharya-9a2b0b19a/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </AboutModal>
      )}
    </>
  );
}

export default About;
