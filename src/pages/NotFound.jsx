import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="w-100 min-h-screen grid place-items-center">
                <h1 className="text-3xl text-center text-gray-800 mb-6">
                    Page Not Found
                </h1>
                <Link to='/'>
                    <button>
                        Go Back Home
                    </button>
                </Link>
        </div>
    </>
  )
}

export default NotFound