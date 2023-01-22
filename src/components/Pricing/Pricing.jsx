import React from 'react'
import { pricings } from './data'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
      <div className="pricing w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
            <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Our pricing</h4>
            <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Pricing & Packages
            </h1>
        </div>
        <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {
                pricings.map(pricing => (
                  <React.Fragment key={pricing.id}>
                    <PricingCard pricing={pricing} />
                  </React.Fragment>
                ))
              }
        </div>
      </div>
        )
}

export default Pricing