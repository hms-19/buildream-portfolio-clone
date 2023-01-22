import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Testimonial from '../components/Testimonial/Testimonial'

const AboutPage = () => {
  return (
    <>
      <Banner title='About Page' since={false} isBtn={false} />
      <About />
      <Testimonial />
    </>
  )
}

export default AboutPage