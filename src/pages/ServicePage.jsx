import React from 'react'
import Banner from '../components/Banner/Banner'
import Service from '../components/Services/Service'

const ServicePage = () => {
  return (
    <>
      <Banner title='Service Page' since={false} isBtn={false} />
      <Service />
    </>
  )
}

export default ServicePage