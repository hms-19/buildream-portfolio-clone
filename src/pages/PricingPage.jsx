import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import Pricing from '../components/Pricing/Pricing'

const PricingPage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | Pricing</title>
      </Helmet>
      <Banner title='Pricing Page' since={false} isBtn={false} />
      <Pricing />
    </>
  )
}

export default PricingPage