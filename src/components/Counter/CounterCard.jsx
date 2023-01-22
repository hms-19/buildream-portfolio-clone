import React from 'react'
import './Counter.css'
import engineer from '../../assets/images/engineer.png'
import Flip from 'react-reveal/Flip'
const CounterCard = ({counter}) => {
  return (
    <Flip left>
      <div className='flex gap-x-2  z-20'>
            <img src={engineer} alt="" />
            <div className='grow'>
            <h1 className="primary-color font-bold text-3xl">
                {counter.count}
            </h1>
            <p className="text-md text-white font-bold mt-4">
                {counter.title}
            </p>
            </div>
      </div>
    </Flip>
  )
}

export default CounterCard