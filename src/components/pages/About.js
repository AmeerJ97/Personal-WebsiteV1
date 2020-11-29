import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Particles from "react-particles-js";
export default function About() {
  return (
    <>
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
      <div className="about-me">
        <h1 className="title"> About Me
        <h1 className="body"> My name is Ameer Ibrahim Osman, I'm a 23 year old tech enthusiast with a passion for 
        Engineering and Physics. I hold a B.Eng in Electrical Engineering from McGill University. I'm an avid learner that's
        committed to lifelong learning. I'm currently looking for my first full-time position to start my career. My interests are vast
        and include Software development, Machine Learning, Photonics, and Network Engineering.
        </h1>
        <h1 className="body2">
        In my free time I like to build systems like the quadcopter or teach myself a new skill like full-stack design to 
        create this website (which runs on my home server). My hobbies include skateboarding, gaming, coding, and 
        drinking redbulls.
        </h1>
        </h1>
      </div>
      <Footer />
    </>
  );
}
