import React from 'react'
import { Fade } from 'react-reveal'
 
import './Service.css'
const ServiceCard = ({service}) => {
  return (
    <Fade right>
        <div className={"px-4 py-6 my-2 flex gap-x-4 shadow-lg  transition duration-500 "+service.color}>
        <div>
            <img src={service.image} width={150} height={150} alt="" />
        </div>
        <div className='flex flex-col gap-y-4'>
            <h2 className="text-xl text-gray-300 transition duration-500">
                {service.title}
            </h2>
            <p className='text-gray-400 transition duration-500'>
                {
                    service.body
                }
            </p>
            <button className="py-1 font-bold px-3 mt-3 primary-color w-[120px] bg-white">Learn More</button>
        </div>
    </div>
    </Fade>
  )
}

export default ServiceCard