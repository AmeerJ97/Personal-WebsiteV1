import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <Link
              class="social-icon-link linkedin"
              to={"//www.linkedin.com/in/ameer-i-859837165/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
          <div class="social-icons">
            <Link
              class="social-icon-link github"
              to="//github.com/AmeerJ97"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
