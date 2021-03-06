import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Particles from "react-particles-js";

export default function Project_photonics() {
  return (
    <>
      <div className="project_container">
        <div className="particles-js">
          <Particles
            id="tsparticles"
            params={{
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: true,
                  speed: 3,
                  straight: false,
                },
                interactivity: {
                  detectsOn: "window",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 40,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 400,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                  value: 100,
                },
                opacity: {
                  value: 0.5,
                },

                shape: {
                  type: "star",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
            }}
            options={{
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 400,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },

              detectRetina: true,
            }}
          />
        </div>
        <h1 className="text-title">
          Fiber Laser Amplifier for Photonic Directed Energy Propulsion and
          Interstellar Flight
        </h1>
        <img
          className="laser_image_img"
          src="../images/Breakthroughstarshot - Copy.jfif"
        ></img>
        <div className="project-buttons">
          <Link
            class="social-icon-link github"
            to="//github.com/AmeerJ97/Photonics/tree/master/Capstone%20Design%20Project"
            target="_blank"
            aria-label="Github"
          >
            <button
              className="btn"
              buttonStyle="btn--outline"
              buttonSize="btn--small"
            >
              <p>
                {" "}
                Project Link <i class="fab fa-github" />
              </p>
            </button>
          </Link>
        </div>
        <h1 className="text">
          My Capstone/Design Project was in collaboration with Project
          Breakthrough Starshot at UCSB and the McGill Interstellar Flight Club.
          The project served as a proof of concept for Breakthrough Starshot
          where we designed a Directed Energy Photonic Amplification System that
          augments 10mW input to 1W output.
        </h1>
        <h1 className="text2">
          {" "}
          My role in this project was Team Leader where I spearheaded extensive
          research into solid-state semiconductor sources, optical amplifiers,
          variable optical attenuators, optical band pass filters, and various
          other optical devices utilized. Moreover, i was in charge of
          simulating the system. Find the details and results of the project by
          using the github link provided.
        </h1>
      </div>
      <Footer />
    </>
  );
}
