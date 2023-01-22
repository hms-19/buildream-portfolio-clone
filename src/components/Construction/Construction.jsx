import React from 'react'
import './Construction.css'

const Construction = () => {
  return (
    <div className="construction">
        <div className="overlay"></div>
        <div className="overlay-cover"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 container mx-auto px-6 md:px-28 absolute w-100 min-h-full h-full top-0 left-0 " style={{ 
          zIndex: '5 !important'
        }}>
            <div className='z-30 w-100 min-h-full h-full flex flex-col justify-center items-center'>
              <p className="text-white font-bold">
              YOU MAY CONTACT US FOR CONSTRUCTION & RENOVATION WORK
              </p>
              <h2 className="text-2xl md:text-4xl font-bold">
              We Are Great Construction Company
              </h2>
            </div>
            <div className="z-30 w-100 min-h-full h-full flex flex-col justify-center items-center">
                <button className='h-[50px] text-center text-white md:text-gray-900 construction-btn font-bold px-2'>
                    MAKE AN APPOINTMENT
                </button>
            </div>
        </div>
      </div>
  )
}

export default Construction