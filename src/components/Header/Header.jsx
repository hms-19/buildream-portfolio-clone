import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='bg-secondary-color'>
        <div className='flex w-100 container mx-auto py-2 gap-x-4 items-center'>
            <div className='flex-1'>
                <div className='w-100 flex justify-between flex-col md:flex-row'>
                    <div>
                        <span className='primary-color mr-2'>
                            Free Call:
                        </span>
                        <span className='text-white'>
                            +1 234 456 78910
                        </span>
                    </div>

                    <div>
                        <span className='primary-color mr-2'>
                            Email Address:
                        </span>
                        <span className='text-white'>
                            buildream@info.com
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <ul className='list-none flex'>
                    <li className='inline'>
                        <a href="/" className='p-3 primary-color bg-gray-700 block mx-1'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li className='inline'>
                        <a href="/" className='p-3 primary-color bg-gray-700 block mx-1'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className='inline'>
                        <a href="/" className='p-3 primary-color bg-gray-700 block mx-1'>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Header