import React from 'react'
import './brand.css'
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
const Brand = () => {
  return (
    <div className='brand__container section__padding'>
      <img className='brand__container-img' alt="google" src={google}></img>
      <img className='brand__container-img' alt="slack" src={slack}></img>
      <img className='brand__container-img' alt="atlassian" src={atlassian}></img>
      <img className='brand__container-img' alt="dropbox" src={dropbox}></img>
      <img className='brand__container-img' alt="shopify" src={shopify}></img>
      
    </div>
  )
}

export default Brand
