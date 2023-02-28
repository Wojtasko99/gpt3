import React from 'react'
import './footer.css'
import footer_img from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading '>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-button'>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-gpt3-image'>
          <img alt="footer_img" src={footer_img}/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links-group'>
          <h5>Links</h5>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links-group'>
          <h5>Company</h5>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links-group'>
          <h5>Get in touch</h5>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-text'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
