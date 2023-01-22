import React from 'react'
import './Team.css'

import engineerImg1 from '../../assets/images/engineer_1.webp'
import engineerImg2 from '../../assets/images/engineer_2.webp'
import engineerImg3 from '../../assets/images/engineer_3.webp'
import engineerImg4 from '../../assets/images/engineer_4.webp'
import {FaFacebook, FaGoogle, FaInstagram, FaQuoteLeft, FaTwitter} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

const Team = () => {
  return (
    <div className="team w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
            <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Team & Staff</h4>
            <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Qualified Engineers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Fade bottom>
              <div className="team-card bg-white shadow-md">
                  <img src={engineerImg1} alt="" />
                  <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">Kyaw Kyaw</h1>
                      <p className="text-gray-400 text-center uppercase">Senior Engineer</p>
                  </div>
                  <div className="team-social flex flex-col gap-y-2">
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaTwitter />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaFacebook />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaInstagram />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaGoogle />
                        </a>
                      </div>
                  </div>
              </div>
              </Fade>
              <Fade bottom>
              <div className="team-card bg-white shadow-md">
                  <img src={engineerImg2} alt="" />
                  <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">John Doe</h1>
                      <p className="text-gray-400 text-center uppercase">Senior Engineer</p>
                  </div>
                  <div className="team-social flex flex-col gap-y-2">
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaTwitter />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaFacebook />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaInstagram />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaGoogle />
                        </a>
                      </div>
                  </div>
              </div>
              </Fade>
              <Fade bottom>
              <div className="team-card bg-white shadow-md">
                  <img src={engineerImg3} alt="" />
                  <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">Sofia</h1>
                      <p className="text-gray-400 text-center uppercase">Senior Engineer</p>
                  </div>
                  <div className="team-social flex flex-col gap-y-2">
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaTwitter />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaFacebook />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaInstagram />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaGoogle />
                        </a>
                      </div>
                  </div>
              </div>
              </Fade>
              <Fade bottom>
              <div className="team-card bg-white shadow-md">
                  <img src={engineerImg4} alt="" />
                  <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">Htet Myat</h1>
                      <p className="text-gray-400 text-center uppercase">Senior Engineer</p>
                  </div>
                  <div className="team-social flex flex-col gap-y-2">
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaTwitter />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaFacebook />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaInstagram />
                        </a>
                      </div>
                      <div className='team-social-icon'>
                        <a href="/" >
                            <FaGoogle />
                        </a>
                      </div>
                  </div>
              </div>
              </Fade>
            </div>
        </div>
      </div>
  )
}

export default Team