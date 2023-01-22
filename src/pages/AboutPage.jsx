import React from 'react'
import { Helmet } from 'react-helmet-async'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import PageAnimation from '../components/PageAnimation/PageAnimation'
import Testimonial from '../components/Testimonial/Testimonial'

const AboutPage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | About</title>
            
      </Helmet>
      <PageAnimation>
        <>
        <Banner title='About Page' since={false} isBtn={false} />
        <About />
        <Testimonial />
        </>
      </PageAnimation>

    </>
  )
}

export default AboutPage