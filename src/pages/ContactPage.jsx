import React from 'react'
import Banner from '../components/Banner/Banner'
import Faq from '../components/Faq/Faq'

const ContactPage = () => {
  return (
    <>
      <Banner title='Contact Page' since={false} isBtn={false} />
      <Faq />
    </>
  )
}

export default ContactPage