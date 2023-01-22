import React from 'react'
import Fade from 'react-reveal/Fade'

const PricingCard = ({pricing}) => {
  return (
    <Fade bottom>
        <div className="shadow-xl rounded-lg flex flex-col gap-y-6 md:gap-y-8 items-center bg-white px-4 py-6 md:px-6 md:py-8 w-100">
        <h4 className="text-md font-bold uppercase">
            {pricing.plan}
        </h4>
        <div className="flex">
            <h5 className="text-gray-400 text-xl">
                $
            </h5>
            <h1 className="text-3xl md:text-4xl font-bold primary-color">
                {pricing.price}K
            </h1>
        </div>
        <p className="text-gray-400 text-center text-lg">
            {pricing.body}
        </p>
        <button className="border border-gray-300-0 bg-primary-color px-4 py-2 md:px-12 md:py-3 uppercase">
                get start
        </button>
    </div>
    </Fade>
  )
}

export default PricingCard