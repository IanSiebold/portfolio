import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Designed and Built by Ian Siebold</small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/IanSiebold'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link LinkedIn'
              href='https://www.linkedin.com/public-profile/in/ian-siebold-77ba77172'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
