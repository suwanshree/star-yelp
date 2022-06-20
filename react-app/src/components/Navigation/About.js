import React, { useState, useEffect } from "react";
import { AboutModal } from "../../context/AboutModal";
import githublogo from "../../images/githublogo.png";
import linkedinlogo from "../../images/linkedinlogo.png";

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
            <div>
              <h3 className="project-info">
                Star Yelp, a Yelp clone, is a business/service review website
                for users to share their listing information with other site
                users, and also provide feedback in the form of reviews and
                ratings for listings posted by other users, all in the expansive
                world of the video game "Star Citizen". Users have the ability
                to edit and delete their listings after posting, and they can
                also edit and delete their reviews/ratings. With Star Yelp, say
                goodbye to wasting precious quantum fuel jumping around the
                'verse to meet your best needs, check the reviews then save time
                and energy!
              </h3>
            </div>
            <div className="external-links">
              <h2 className="name">Project By : Suwanshree Acharya</h2>
              <div className="logos-div-container">
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
          </div>
        </AboutModal>
      )}
    </>
  );
}

export default About;
