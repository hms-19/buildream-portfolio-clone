import React, { useState } from 'react'
import './Header.css'
import { BiMenu } from 'react-icons/bi'
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='bg-gray-700 overflow-hidden'>
        <div className="container flex justify-between mx-auto items-center">
            <div>
                <h1 className='uppercase text-xl z-50 py-6 px-3 text-gray-700 font-bold logo'>
                    Buildream
                </h1>
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className=" flex text-white mr-2 text-lg items-center ml-4 md:hidden bg-transparent border-0">
                <BiMenu />
                <span className="ml-1">
                    MENU
                </span>
            </button>
            <div className={`fixed md:static ${showMenu ? '' : 'hidden md:block'} bg-gray-700 md:bg-transparent w-full z-50 top-[163px] md:top-0 md:w-auto`}>
                <ul className='flex flex-col md:flex-row items-start md:items-center'>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            Project
                        </a>
                    </li>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="" className='px-3 py-6 block text-gray-400 uppercase'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar