import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Blog from '../components/Blogs/Blog'
import Construction from '../components/Construction/Construction'
import Counter from '../components/Counter/Counter'
import Faq from '../components/Faq/Faq'
import Pricing from '../components/Pricing/Pricing'
import Project from '../components/Project/Project'
import Service from '../components/Services/Service'
import Team from '../components/Team/Team'
import Testimonial from '../components/Testimonial/Testimonial'

const HomePage = () => {
  return (
    <>
        <Banner title='WE WILL BE HAPPY TO TAKE CARE OF YOUR WORK' since={true} isBtn={true} />
        <About />
        <Construction />
        <Service />
        <Counter />
        <Team />
        <Project />
        <Pricing />
        <Testimonial />
        <Blog title={'Recent Blog'} />
        <Faq />
    </>
  )
}

export default HomePage