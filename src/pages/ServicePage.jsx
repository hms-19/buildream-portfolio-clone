import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import PageAnimation from '../components/PageAnimation/PageAnimation'
import Service from '../components/Services/Service'

const ServicePage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | Services</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title='Service Page' since={false} isBtn={false} />
          <Service />
        </>
      </PageAnimation>

    </>
  )
}

export default ServicePage