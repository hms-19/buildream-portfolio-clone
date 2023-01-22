import React from 'react'
import './Banner.css'
import {BiArrowBack} from 'react-icons/bi'

const Banner = ({title,since,isBtn}) => {
  return (
    <div id="banner">
    <div className="overlay"></div>
    <div className='banner-content pt-8'>
      {
        since ?
        <h4 className='since'>
          SINCE 1982
        </h4>
        :
        <></>
      }
      <h1 className='main-header mb-6'>
          {title}
      </h1>
      {
        isBtn ? 
        <div className='flex gap-x-4 banner-btn'>
          <button className='contact-btn flex items-center justify-center uppercase gap-x-4'><span>Contact Us</span> <BiArrowBack className='text-lg rotate-90' /></button>
          <button className='request-btn flex items-center justify-center uppercase gap-x-4'><span>rEQUEST A QUOTE</span> <BiArrowBack className='text-lg rotate-90' /></button>
        </div>
        : <></>
      }
    </div>
    </div>
  )
}

export default Banner