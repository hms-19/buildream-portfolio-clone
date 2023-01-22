import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import Faq from '../components/Faq/Faq'

const ContactPage = () => {
  return (
    <>
      <Helmet>
          <title>BUILDREM | Contact</title>
      </Helmet>
      <Banner title='Contact Page' since={false} isBtn={false} />
      <Faq />
    </>
  )
}

export default ContactPage