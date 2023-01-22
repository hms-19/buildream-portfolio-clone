import React from 'react'
import './Service.css'
import serviceImg from '../../assets/images/home_page_5.webp'
import { services } from './data'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <div className="service py-6 md:py-12 px-6 md:px-24 container mx-auto">
          <h4 className="text-lg primary-color text-center mb-4 font-bold">What we do</h4>
          <h1 className="text-2xl md:text-6xl font-bold text-center mb-4">
            Services
          </h1>
          <div className='w-100 min-h-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <img src={serviceImg} style={{ 
              height: '100 min-h-full%',
              objectFit : 'cover'
            }} alt="" />
            <div className='px-4'>
              {
                  services.map(service => (
                    <React.Fragment key={service.id}>
                      <ServiceCard service={service} />
                    </React.Fragment>
                  ))
              }
            </div>
          </div>
      </div>
  )
}

export default Service