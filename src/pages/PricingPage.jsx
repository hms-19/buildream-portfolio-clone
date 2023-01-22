import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import PageAnimation from '../components/PageAnimation/PageAnimation'
import Pricing from '../components/Pricing/Pricing'

const PricingPage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | Pricing</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title='Pricing Page' since={false} isBtn={false} />
          <Pricing />
        </>
      </PageAnimation>

    </>
  )
}

export default PricingPage