import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './script'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img alt="google" src={google}></img>
      </div>
      <div>
        <img alt="slack" src={slack}></img>
      </div>
      <div><img alt="atlassian" src={atlassian}></img></div>
      <div><img alt="atlassian" src={atlassian}></img></div>
      <div><img alt="dropbox" src={dropbox}></img></div>
      <div><img alt="shopify" src={shopify}></img></div>
    </div>
  )
}

export default Brand
