import React from "react";
import "../../App.css";
import Footer from '../Footer';
import Particles from "react-particles-js";

export default function ContactMe() {

  // const [submitting, setSubmitting] = useState(false);
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setSubmitting(true);

  //   setTimeout(() => {
  //     setSubmitting(false);
  //   }, 3000)
  // }


  return (
    <>
    <div className='big-container'>
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
    <div className="contact-me">
      <div className="contact-forum">
      <h1 className="contact-title"> Send me your thoughts</h1>
        <div className="contact-name">
          <form>
            <input
              className="contact_name"
              name="Name"
              type="text"
              placeholder="Your Name"
              
            />
          </form>

          </div>
          <div className="contact-email"> 
          <form>
            <input
              className="contact_email"
              name="Email"
              type="text"
              placeholder="Your Email"
              
            />
          </form>
          </div>
          <div className="contact-message">
          <form>
            <input
              className="contact_message"
              name="Message"
              type="text"
              placeholder="Your Message"
              
            />
          </form>
        </div>
        <div className='contact-btn'>
        <button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          > Send
        </button>
        </div>

      </div>
    </div>
    <Footer />
    </div>
    </>
  );
}
