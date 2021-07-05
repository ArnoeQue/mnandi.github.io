import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          OUR MOTTO 
        </p>
        <p className='footer-subscription-text'>
“Vhadzulapo vha tshi khwinifhadza zwiwaniwa zwa dakani” (which means…..In English Mnandi Mnandi translates to tasty, enjoyable and sweet)
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='eg. myname@gmail.com'
            />
            <Button buttonStyle='btn--outline'>contact</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/+263773115364'>Contact</Link>
            <Link to='/info@biohubtrust.org.zw'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/@bio-hub_trust'>Instagram</Link>
            <Link to='/@bio-hub_trust'>Facebook</Link>
            <Link to='/@bio-hub_trust'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Mnandi Mnandi
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Mnandi Mnandi © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='bio-hub_trust'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='bio-hub_trust'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='bio-hub_trust'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;