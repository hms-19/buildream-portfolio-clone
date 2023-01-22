import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import Faq from '../components/Faq/Faq'
import PageAnimation from '../components/PageAnimation/PageAnimation'

const ContactPage = () => {
  return (
    <>
      <Helmet>
          <title>BUILDREM | Contact</title>
      </Helmet>
      <PageAnimation>
        <>
        <Banner title='Contact Page' since={false} isBtn={false} />
        <Faq />
        </>
      </PageAnimation>
    </>
  )
}

export default ContactPage