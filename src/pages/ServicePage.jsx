import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import Service from '../components/Services/Service'

const ServicePage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | Services</title>
      </Helmet>
      <Banner title='Service Page' since={false} isBtn={false} />
      <Service />
    </>
  )
}

export default ServicePage