import React, { useState, useEffect } from "react";
import "../App.css";
import "./LandingSection.css";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import Typed from "react-typed";

function LandingSection() {
  return (
    <div className="landing-container">
      {/* <video
        src="/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-medium.mp4"
        autoPlay
        loop
        muted
      /> */}
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
      <h1>Hello World!</h1>
      <p>
        I'm Ameer, an Electrical Engineer graduating from McGill University.
      </p>

      <div className="landing-btns">
        {/* <a href="/files/AmeerOsman_CV.pdf" target="_blank">
          <button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Resume
          </button>
        </a> */}
        <Link
          class="social-icon-link linkedin"
          to={"//www.linkedin.com/in/ameer-i-859837165/"}
          target="_blank"
          aria-label="LinkedIn"
        >
          <button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <p>
              LinkedIn <i class="fab fa-linkedin" />
            </p>
          </button>
        </Link>
        <Link
          class="social-icon-link github"
          to="//github.com/AmeerJ97"
          target="_blank"
          aria-label="Github"
        >
          <button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <p>
              Github <i class="fab fa-github" />
            </p>
          </button>
        </Link>
      </div>
      <div className="typed-wrapper">
        <span class="text">
          <Typed strings={["I Code In"]} typeSpeed={50} />
          <br />
        </span>
        <span class="text-box">
          <Typed
            strings={[
              "Java",
              "C++",
              "Python",
              "React.Js",
              "CSS",
              "HTML",
              "C",
              "MATLAB",
            ]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
          <br />
        </span>
      </div>
    </div>
  );
}

export default LandingSection;
