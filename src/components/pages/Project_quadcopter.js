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
        <h1 className="text-title-quadcopter">
            Personal Project: Building a Quadcopter
        </h1>
        <img className="quadcopter-img" src="../images/Quadcopter1.jpg"></img>
        <div className="project-buttons">
          <Link
            class="social-icon-link github"
            to="//github.com/AmeerJ97/Quadcopter-Design-Project-V3.0"
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
                Project Code <i class="fab fa-github" />
              </p>
            </button>
          </Link>
        </div>
        <h1 className="text">
          In this personal project, I explore how to build a Quadcopter using programmable modules
          from scratch. For software, I'm currently designing the 
          flight controller software without utilizing external software such as multiWii. I've also built 
          an arduino based transmitter station that utilizes the PS3 controller.
        </h1>
        <h1 className="text2">
          {" "}
          This project was developed in the Arduino Enviroment, using the language C/C++. You can find a list of 
          the hardware components used as well as the source code on my github by using the 
          link provided above.
        </h1>
      </div>
      <Footer />
    </>
  );
}
