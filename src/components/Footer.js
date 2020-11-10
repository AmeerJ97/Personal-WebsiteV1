import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p> */}
        <p className='footer-subscription-text'>
          Contact Me!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link linkedin'
              to={'//www.linkedin.com/in/ameer-i-859837165/'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link github'
              to='//github.com/AmeerJ97'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
              </Link>
              <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Resume'
            > 
              <i class="fas fa-file"></i>
              </Link>
              
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;