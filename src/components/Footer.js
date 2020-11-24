import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-section'>
        <p className='footer-text'>
          Contact Me!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-name'
              name='name'
              type='name'
              placeholder='Your Name'
            />
            </form>
            <form>
            <input
            className='footer-email'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          </form>
          <form>
          <input
              className='footer-message'
              name='Message'
              type='Message'
              placeholder='Your Message'
            />
          </form>
          <Button buttonStyle='btn--outline'>Send</Button>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <pre>                                                                                                 </pre>
            <Link
              class='social-icon-link linkedin'
              to={'//www.linkedin.com/in/ameer-i-859837165/'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <pre>         </pre>
            <Link
              class='social-icon-link github'
              to='//github.com/AmeerJ97'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
              </Link>
              <pre>      </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;