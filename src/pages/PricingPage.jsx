import React from 'react'
import Banner from '../components/Banner/Banner'
import Pricing from '../components/Pricing/Pricing'

const PricingPage = () => {
  return (
    <>
      <Banner title='Pricing Page' since={false} isBtn={false} />
      <Pricing />
    </>
  )
}

export default PricingPage