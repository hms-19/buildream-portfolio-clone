import React from 'react'
import './Footer.css'
import { FaTwitter, FaFacebookF, FaInstagram, FaAngleRight } from 'react-icons/fa'
import projectImg1 from '../../assets/images/project_1.webp'
import projectImg2 from '../../assets/images/project_2.webp'
import projectImg3 from '../../assets/images/project_3.webp'
import { BiArrowBack, BiComment, BiUser } from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='min-h-screen w-100 bg-zinc-800'>
        <div className='h-75 w-100'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                <div>
                    <h3 className="text-2xl font-bold primary-color uppercase mb-4">
                        buildream
                    </h3>
                    <p className="text-gray-500">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
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
                <div>
                    <h3 className="text-xl font-bold primary-color uppercase mb-4">
                        buildream
                    </h3> 
                    <div className='flex flex-col gap-y-4'>
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={projectImg1} width={100} height={100} alt="" />
                            <div>
                                <h4 className="font-bold text-white hover:primary-color text-md">
                                    Biggest Construction in New York, USA
                                </h4>
                                <div className="flex gap-x-2">
                                <div className='flex gap-x-2 items-center'>
                                    <BiUser className='primary-color text-sm' />
                                    <p className="uppercase text-sm text-gray-400">
                                        Admin
                                    </p>
                                </div>
                                <div className='flex gap-x-2 items-center'>
                                    <BiComment className='primary-color font-bold text-sm' />
                                    <p className="uppercase text-sm text-gray-400">
                                        3 Comments
                                    </p>
                                </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={projectImg2} width={100} height={100} alt="" />
                            <div>
                                <h4 className="font-bold text-white hover:primary-color text-md">
                                    Biggest Construction in New York, USA
                                </h4>
                                <div className="flex gap-x-2">
                                <div className='flex gap-x-2 items-center'>
                                    <BiUser className='primary-color text-sm' />
                                    <p className="uppercase text-sm text-gray-400">
                                        Admin
                                    </p>
                                </div>
                                <div className='flex gap-x-2 items-center'>
                                    <BiComment className='primary-color text-sm' />
                                    <p className="uppercase text-sm text-gray-400">
                                        3 Comments
                                    </p>
                                </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={projectImg3} width={100} height={100} alt="" />
                            <div>
                                <h4 className="font-bold text-white hover:primary-color text-md">
                                    Biggest Construction in New York, USA
                                </h4>
                                <div className="flex gap-x-2">
                                <div className='flex gap-x-2 items-center'>
                                    <BiUser className='primary-color text-sm' />
                                    <p className="uppercase text-sm text-gray-400">
                                        Admin
                                    </p>
                                </div>
                                <div className='flex gap-x-2 items-center'>
                                    <BiComment className='primary-color text-sm' />
                                    <p className=" uppercase text-sm text-gray-400">
                                        3 Comments
                                    </p>
                                </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold primary-color uppercase mb-4">
                        quick links
                    </h3>
                    <div className='flex flex-col gap-y-4'>
                        <div>
                            <a href="" className='text-white font-bold text-lg flex gap-x-2 items-center'>
                                <FaAngleRight />
                                <span>Home</span>
                            </a>
                            <a href="" className='text-white font-bold text-lg flex gap-x-2 items-center'>
                                <FaAngleRight />
                                <span>About</span>
                            </a>
                            <a href="" className='text-white font-bold text-lg flex gap-x-2 items-center'>
                                <FaAngleRight />
                                <span>Services</span>
                            </a>
                            <a href="" className='text-white font-bold text-lg flex gap-x-2 items-center'>
                                <FaAngleRight />
                                <span>Project</span>
                            </a>
                            <a href="" className='text-white font-bold text-lg flex gap-x-2 items-center'>
                                <FaAngleRight />
                                <span>Pricing</span>
                            </a>
                            <a href="" className='text-white font-bold text-lg flex gap-x-2 items-center'>
                                <FaAngleRight />
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer