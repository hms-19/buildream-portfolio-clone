import React from 'react'
import './Project.css'
import projectImg1 from '../../assets/images/project_1.webp'
import projectImg2 from '../../assets/images/project_2.webp'
import projectImg3 from '../../assets/images/project_3.webp'
import projectImg4 from '../../assets/images/project_4.webp'
import projectImg5 from '../../assets/images/project_5.webp'
import projectImg6 from '../../assets/images/project_6.webp'
import { BiSearch } from 'react-icons/bi'
import { Fade } from 'react-reveal'

const Project = () => {
  return (
<div className="projects w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
            <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Portfolio</h4>
            <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Projects
            </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-12">
            <Fade top>
              <div className="project-card">
                  <img src={projectImg1} alt="" className='project-img' />
                  <div className='project-content'>
                      <h4 className='text-white uppercase font-bold'>
                        building
                      </h4>
                      <h1 className="uppercase font-bold text-3xl text-white">
                        High Tower Works
                      </h1>
                  </div>
                  <div className="project-search">
                    <BiSearch />
                  </div>
              </div>
            </Fade>
            <Fade top>
              <div className="project-card">
                  <img src={projectImg2} alt="" className='project-img' />
                  <div className='project-content'>
                      <h4 className='text-white uppercase font-bold'>
                        building
                      </h4>
                      <h1 className="uppercase font-bold text-3xl text-white">
                        High Tower Works
                      </h1>
                  </div>
                  <div className="project-search">
                    <BiSearch />
                  </div>
              </div>
            </Fade>
            <Fade top>
              <div className="project-card">
                  <img src={projectImg3} alt="" className='project-img' />
                  <div className='project-content'>
                      <h4 className='text-white uppercase font-bold'>
                        building
                      </h4>
                      <h1 className="uppercase font-bold text-3xl text-white">
                        High Tower Works
                      </h1>
                  </div>
                  <div className="project-search">
                    <BiSearch />
                  </div>
              </div>
            </Fade>
            <Fade top>
              <div className="project-card">
                  <img src={projectImg4} alt="" className='project-img' />
                  <div className='project-content'>
                      <h4 className='text-white uppercase font-bold'>
                        building
                      </h4>
                      <h1 className="uppercase font-bold text-3xl text-white">
                        High Tower Works
                      </h1>
                  </div>
                  <div className="project-search">
                    <BiSearch />
                  </div>
              </div>
            </Fade>

            <Fade top>
              <div className="project-card">
                  <img src={projectImg5} alt="" className='project-img' />
                  <div className='project-content'>
                      <h4 className='text-white uppercase font-bold'>
                        building
                      </h4>
                      <h1 className="uppercase font-bold text-3xl text-white">
                        High Tower Works
                      </h1>
                  </div>
                  <div className="project-search">
                    <BiSearch />
                  </div>
              </div>
            </Fade>
            <Fade top>
              <div className="project-card">
                  <img src={projectImg6} alt="" className='project-img' />
                  <div className='project-content'>
                      <h4 className='text-white uppercase font-bold'>
                        building
                      </h4>
                      <h1 className="uppercase font-bold text-3xl text-white">
                        High Tower Works
                      </h1>
                  </div>
                  <div className="project-search">
                    <BiSearch />
                  </div>
              </div>
            </Fade>
          </div>
      </div>
  )
}

export default Project