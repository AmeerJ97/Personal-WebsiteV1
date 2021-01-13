import React from "react";
import "../../App.css";
import Footer from '../Footer';
import Particles from "react-particles-js";

export default function ContactMe() {

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }


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
    <div className="contact-me">
      <div className="contact-forum">
      <h1 className="contact-title"> Send me your thoughts</h1>
        
          <form>
            <input
              className="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              
            />
          </form>

        
          <form>
            <input
              className="contact-email"
              name="email"
              type="text"
              placeholder="Your Email"
            />
          </form>
   
        
          <form>
            <input
              className="contact-message"
              name="Message"
              type="text"
              placeholder="Your Message"
              maxLength = "inf"
              size="20"
            />
          </form>
  
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
    </>
  );
}
