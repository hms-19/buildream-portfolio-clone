import React from 'react'
import './Counter.css'
import CounterCard from './CounterCard'
import { counters } from './data'

const Counter = () => {
  return (
    <div className="counter">
            <div className="container mx-auto px-6 md:px-20 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-4">
                {
                  counters.map(counter => (
                    <React.Fragment key={counter.id}>
                      <CounterCard counter={counter} />
                    </React.Fragment>
                  ))
                }
            </div>
      </div>
  )
}

export default Counter