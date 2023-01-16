import React from 'react'
import engineer from '../../assets/images/engineer.png'
import buildings from '../../assets/images/buildings.png'
import consulting from '../../assets/images/consulting.png'
import setting from '../../assets/images/settings.png'
import serviceImg from '../../assets/images/home_page_5.webp'
import { BiArrowBack, BiComment, BiSearch, BiUser } from 'react-icons/bi'
import './Home.css'
import aboutImg from '../../assets/images/home_page_2.webp' 
import skyline from '../../assets/images/skyline.png' 
import engineerImg1 from '../../assets/images/engineer_1.webp'
import engineerImg2 from '../../assets/images/engineer_2.webp'
import engineerImg3 from '../../assets/images/engineer_3.webp'
import engineerImg4 from '../../assets/images/engineer_4.webp'
import {FaFacebook, FaGoogle, FaInstagram, FaQuoteLeft, FaTwitter} from 'react-icons/fa'
import projectImg1 from '../../assets/images/project_1.webp'
import projectImg2 from '../../assets/images/project_2.webp'
import projectImg3 from '../../assets/images/project_3.webp'
import projectImg4 from '../../assets/images/project_4.webp'
import projectImg5 from '../../assets/images/project_5.webp'
import projectImg6 from '../../assets/images/project_6.webp'
import client1 from '../../assets/images/client_1.webp'
import client2 from '../../assets/images/client_2.webp'
import blog1 from '../../assets/images/blog_1.webp'
import blog2 from '../../assets/images/blog_2.webp'
import blog3 from '../../assets/images/blog_3.webp'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Home = () => {
  return (
    <>
        {/* home */}

        <div id="banner">
        <div className="overlay"></div>
        <div className='banner-content pt-8'>
          <h4 className='since'>
            SINCE 1982
          </h4>
          <h1 className='main-header mb-6'>
            WE WILL BE <span>HAPPY</span> TO TAKE CARE OF YOUR WORK
          </h1>
          <div className='flex gap-x-4 banner-btn'>
            <button className='contact-btn flex items-center justify-center uppercase gap-x-4'><span>Contact Us</span> <BiArrowBack className='text-lg rotate-90' /></button>
            <button className='request-btn flex items-center justify-center uppercase gap-x-4'><span>rEQUEST A QUOTE</span> <BiArrowBack className='text-lg rotate-90' /></button>
          </div>
        </div>
        </div>

      {/* about */}

      <div className="bg-gray-100 min-h-full w-full py-6 md:py-24">
        <div className='container mx-auto px-6 md:px-24'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
              <div className='relative w-full h-full p-0 md:p-6'>
                  <img src={aboutImg} alt="About Image" className='w-full h-full object-cover' />
                  <div className="absolute bottom-0 right-0 about-img-card flex px-4 py-6 items-center w-full gap-x-4 md:w-[300px] justify-start about-info-card">
                      <div>
                        <img src={engineer} alt="" />
                      </div>
                      <div>
                          <span className='text-xl' style={{ 
                            color : 'rgb(255, 166, 43)'
                          }}>
                              38
                          </span>
                          <p className="text-2xl font-bold text-white">
                            Years of experienced
                          </p>
                      </div>
                  </div>
              </div>
              <div className='p-6 flex flex-col gap-y-6'>
                <p className="primary-color font-bold text-lg ">
                  Welcome to Buildream
                </p>
                <h1 className=" text-4xl md:text-6xl leading-72 font-semibold">
                Quality and Affordable Constructor
                </h1>
                <p className="text-gray-400">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <h2 className="text-2xl text-gray-600">
                We Can Help You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                          <div>
                            <img src={buildings} alt="" />
                          </div>
                          <div>
                            <h2 className="text-xl text-gray-900 transition duration-500">
                              Construction
                            </h2>
                            <p className='text-gray-400 transition duration-500'>
                            Far far away, behind the word mountains.
                            </p>
                          </div>
                      </div>
                      <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                          <div>
                            <img src={buildings} alt="" />
                          </div>
                          <div>
                            <h2 className="text-xl text-gray-900 transition duration-500">
                              Architure
                            </h2>
                            <p className='text-gray-400 transition duration-500'>
                            Far far away, behind the word mountains.
                            </p>
                          </div>
                      </div>
                      <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                          <div>
                              <img src={consulting} alt="" />                        
                          </div>
                          <div>
                            <h2 className="text-xl text-gray-900 transition duration-500">
                              Consulting
                            </h2>
                            <p className='text-gray-400 transition duration-500'>
                            Far far away, behind the word mountains.
                            </p>
                          </div>
                      </div>
                      <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                          <div>
                              <img src={setting} alt="" />
                          </div>
                          <div>
                            <h2 className="text-xl text-gray-900 transition duration-500">
                              Settings
                            </h2>
                            <p className='text-gray-700 transition duration-500'>
                            Far far away, behind the word mountains.
                            </p>
                          </div>
                      </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* construction */}

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


      {/* Services */}

      <div className="service py-6 md:py-12 px-6 md:px-24 container mx-auto">
          <h4 className="text-lg primary-color text-center mb-4 font-bold">What we do</h4>
          <h1 className="text-2xl md:text-6xl font-bold text-center mb-4">
            Services
          </h1>
          <div className='w-100 min-h-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <img src={serviceImg} style={{ 
              height: '100 min-h-full%',
              objectFit : 'cover'
            }} alt="" />
            <div className='px-4'>
              <div className="px-4 py-6 my-2 flex gap-x-4 shadow-lg bg-gray-900 transition duration-500">
                    <div>
                      <img src={buildings} width={150} height={150} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                      <h2 className="text-xl text-gray-300 transition duration-500">
                      Construction Services
                      </h2>
                      <p className='text-gray-400 transition duration-500'>
                      Far far away, behind the word mountains.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus laborum nihi
                      </p>
                      <button className="py-1 font-bold px-3 mt-3 primary-color w-[120px] bg-white">Learn More</button>
                    </div>
              </div>
              <div className="px-4 py-6 my-2 flex gap-x-4 shadow-lg bg-primary-color transition duration-500">
                    <div>
                      <img src={skyline} width={150} height={150} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                      <h2 className="text-xl text-gray-300 transition duration-500">
                      Infrastructure Services

                      </h2>
                      <p className='text-gray-100 min-h-full transition duration-500'>
                      Far far away, behind the word mountains.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus laborum nihi
                      </p>
                      <button className="py-1 font-bold px-3 mt-3 primary-color w-[120px] bg-white">Learn More</button>
                    </div>
              </div>
              <div className="px-4 py-6 my-2 flex gap-x-4 shadow-lg about-card hover:bg-gray-900 transition duration-500">
                    <div>
                      <img src={buildings} width={150} height={150} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                      <h2 className="text-xl text-gray-300 transition duration-500">
                      Architecture Services

                      </h2>
                      <p className='text-gray-400 transition duration-500'>
                      Far far away, behind the word mountains.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus laborum nihi
                      </p>
                      <button className="py-1 font-bold px-3 mt-3 primary-color w-[120px] bg-white">Learn More</button>
                    </div>
              </div>
            </div>
          </div>
      </div>


      {/* counter */}

      <div className="counter">
            <div className="container mx-auto px-6 md:px-20 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-4">
                <div className='flex gap-x-2  z-20'>
                      <img src={engineer} alt="" />
                      <div className='grow'>
                        <h1 className="primary-color font-bold text-3xl">
                        3,000
                        </h1>
                        <p className="text-md text-white font-bold mt-4">
                          Completed projects
                        </p>
                      </div>
                </div>
                <div className='flex gap-x-2  z-20'>
                      <img src={engineer} alt="" />
                      <div className='grow'>
                        <h1 className="primary-color font-bold text-3xl">
                        3,20
                        </h1>
                        <p className="text-md text-white font-bold mt-4">
                          Happy CLients
                        </p>
                      </div>
                </div>
                <div className='flex gap-x-2  z-20'>
                      <img src={engineer} alt="" />
                      <div className='grow'>
                        <h1 className="primary-color font-bold text-3xl">
                        500
                        </h1>
                        <p className="text-md text-white font-bold mt-4">
                          Cups of coffee
                        </p>
                      </div>
                </div>
                <div className='flex gap-x-2  z-20'>
                      <img src={engineer} alt="" />
                      <div className='grow'>
                        <h1 className="primary-color font-bold text-3xl">
                        1,000
                        </h1>
                        <p className="text-md text-white font-bold mt-4">
                          Engineers & Staff
                        </p>
                      </div>
                </div>
            </div>
      </div>


      {/* team */}

      <div className="team w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
            <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Team & Staff</h4>
            <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Qualified Engineers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            </div>
        </div>
      </div>

      {/* projects */}
      <div className="projects w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
            <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Portfolio</h4>
            <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Projects
            </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-12">
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
          </div>
      </div>

      {/* pricing */}
      <div className="pricing w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
            <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Our pricing</h4>
            <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Pricing & Packages
            </h1>
        </div>
        <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="shadow-xl rounded-lg flex flex-col gap-y-6 md:gap-y-8 items-center bg-white px-4 py-6 md:px-6 md:py-8 w-100">
                <h4 className="text-md font-bold uppercase">
                  Basic plan
                </h4>
                <div className="flex">
                    <h5 className="text-gray-400 text-xl">
                      $
                    </h5>
                    <h1 className="text-3xl md:text-4xl font-bold primary-color">
                      49K
                    </h1>
                </div>
                <p className="text-gray-400 text-center text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="border border-gray-300-0 bg-primary-color px-4 py-2 md:px-12 md:py-3 uppercase">
                      get start
                </button>
            </div>
            <div className="shadow-xl rounded-lg flex flex-col gap-y-6 md:gap-y-8 items-center bg-white px-4 py-6 md:px-6 md:py-8 w-100">
                <h4 className="text-md font-bold uppercase">
                  Stella plan
                </h4>
                <div className="flex">
                    <h5 className="text-gray-400 text-xl">
                      $
                    </h5>
                    <h1 className="text-3xl md:text-4xl font-bold primary-color">
                      75K
                    </h1>
                </div>
                <p className="text-gray-400 text-center text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="border border-gray-300-0 bg-primary-color px-4 py-2 md:px-12 md:py-3 uppercase">
                      get start
                </button>
            </div>
            <div className="shadow-xl rounded-lg flex flex-col gap-y-6 md:gap-y-8 items-center bg-white px-4 py-6 md:px-6 md:py-8 w-100">
                <h4 className="text-md font-bold uppercase">
                  Best Seller plan
                </h4>
                <div className="flex">
                    <h5 className="text-gray-400 text-xl">
                      $
                    </h5>
                    <h1 className="text-3xl md:text-4xl font-bold primary-color">
                      100K
                    </h1>
                </div>
                <p className="text-gray-400 text-center text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="border border-gray-300-0 bg-primary-color px-4 py-2 md:px-12 md:py-3 uppercase">
                      get start
                </button>
            </div>
            <div className="shadow-xl rounded-lg flex flex-col gap-y-6 md:gap-y-8 items-center bg-white px-4 py-6 md:px-6 md:py-8 w-100">
                <h4 className="text-md font-bold uppercase">
                  Pro plan
                </h4>
                <div className="flex">
                    <h5 className="text-gray-400 text-xl">
                      $
                    </h5>
                    <h1 className="text-3xl md:text-4xl font-bold primary-color">
                      120K
                    </h1>
                </div>
                <p className="text-gray-400 text-center text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="border border-gray-300-0 bg-primary-color px-4 py-2 md:px-12 md:py-3 uppercase">
                      get start
                </button>
            </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="testimonial w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
              <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Testimonial</h4>
              <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                  Happy Clients
              </h1>

              <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12">
                  <div className="testimonial-card shadow-xl p-6 md:px-8 md:py-12 bg-white">
                      <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                          <div className="testimonial-profile relative w-[70px] h-[70px]">
                            <img src={client1} alt="Test" className='w-100 h-100 rounded-full' />
                            <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute text-white grid place-items-center font-bold text-lg bottom-0 right-0 shadow-lg">
                              <FaQuoteLeft />
                            </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold uppercase">
                              ROGER SCOTT
                              </h2>
                              <p className="primary-color uppercase">
                              MARKETING MANAGER
                              </p>
                          </div>
                      </div>
                      <p className="text-gray-500 text-lg mt-4">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                  </div>
                  <div className="testimonial-card shadow-xl p-6 md:px-8 md:py-12 bg-primary-color">
                      <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                          <div className="testimonial-profile relative w-[70px] h-[70px]">
                            <img src={client2} alt="Test" className='w-100 h-100 rounded-full' />
                            <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute text-white grid place-items-center font-bold text-lg bottom-0 right-0 shadow-lg">
                              <FaQuoteLeft />
                            </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold uppercase">
                              ROGER SCOTT
                              </h2>
                              <p className="text-white uppercase">
                              MARKETING MANAGER
                              </p>
                          </div>
                      </div>
                      <p className="text-gray-900 text-lg mt-4">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                  </div>
                  <div className="testimonial-card shadow-xl p-6 md:px-8 md:py-12 bg-white">
                      <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                          <div className="testimonial-profile relative w-[70px] h-[70px]">
                            <img src={client1} alt="Test" className='w-100 h-100 rounded-full' />
                            <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute text-white grid place-items-center font-bold text-lg bottom-0 right-0 shadow-lg">
                              <FaQuoteLeft />
                            </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold uppercase">
                              ROGER SCOTT
                              </h2>
                              <p className="primary-color uppercase">
                              MARKETING MANAGER
                              </p>
                          </div>
                      </div>
                      <p className="text-gray-500 text-lg mt-4">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                  </div>
              </div>
                </div> 
                <div id="item2" className="carousel-item w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12">
                  <div className="testimonial-card shadow-xl p-6 md:px-8 md:py-12 bg-white">
                      <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                          <div className="testimonial-profile relative w-[70px] h-[70px]">
                            <img src={client1} alt="Test" className='w-100 h-100 rounded-full' />
                            <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute text-white grid place-items-center font-bold text-lg bottom-0 right-0 shadow-lg">
                              <FaQuoteLeft />
                            </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold uppercase">
                              ROGER SCOTT
                              </h2>
                              <p className="primary-color uppercase">
                              MARKETING MANAGER
                              </p>
                          </div>
                      </div>
                      <p className="text-gray-500 text-lg mt-4">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                  </div>
                  <div className="testimonial-card shadow-xl p-6 md:px-8 md:py-12 bg-primary-color">
                      <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                          <div className="testimonial-profile relative w-[70px] h-[70px]">
                            <img src={client2} alt="Test" className='w-100 h-100 rounded-full' />
                            <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute text-white grid place-items-center font-bold text-lg bottom-0 right-0 shadow-lg">
                              <FaQuoteLeft />
                            </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold uppercase">
                              ROGER SCOTT
                              </h2>
                              <p className="text-white uppercase">
                              MARKETING MANAGER
                              </p>
                          </div>
                      </div>
                      <p className="text-gray-900 text-lg mt-4">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                  </div>
                  <div className="testimonial-card shadow-xl p-6 md:px-8 md:py-12 bg-white">
                      <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                          <div className="testimonial-profile relative w-[70px] h-[70px]">
                            <img src={client1} alt="Test" className='w-100 h-100 rounded-full' />
                            <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute text-white grid place-items-center font-bold text-lg bottom-0 right-0 shadow-lg">
                              <FaQuoteLeft />
                            </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold uppercase">
                              ROGER SCOTT
                              </h2>
                              <p className="primary-color uppercase">
                              MARKETING MANAGER
                              </p>
                          </div>
                      </div>
                      <p className="text-gray-500 text-lg mt-4">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                  </div>
              </div>
                </div> 
              </div> 
              <div className="flex justify-center w-full py-2 gap-2 mt-6">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
              </div>
          </div>
      </div>

      {/* blogs */}
      <div className="blogs w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
                <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Our Blog</h4>
                <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                    Recent Blog
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mt-6 md:mt-12">
                    <div className="blog-card w-100 shadow-lg">
                      <div className="blog-img relative w-100 overflow-hidden">
                          <img src={blog1} alt="" className='object-cover w-100 h-[270px]' />
                          <div className='p-4 bg-gray-800 absolute bottom-0 left-6 z-10 text-white text-2xl font-bold'>
                              <div className="text-3xl">16</div>
                              JAN 
                          </div>
                      </div>
                      <div className="px-4 py-6">
                        <div className="flex gap-x-4 my-4">
                            <div className='flex gap-x-3 items-center'>
                              <BiUser className='primary-color font-bold' />
                              <p className="font-bold uppercase text-md text-gray-900">
                                Admin
                              </p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                              <BiComment className='primary-color font-bold' />
                              <p className="font-bold uppercase text-md text-gray-900">
                                3 Comments
                              </p>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl text-gray-900 transition duration-300 blog-header">
                        Biggest Construction in New York, USA
                        </h1>
                        <p className="text-lg text-gray-500 mt-4">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                    <div className="blog-card w-100 shadow-lg">
                      <div className="blog-img relative w-100 overflow-hidden">
                          <img src={blog2} alt="" className='object-cover w-100 h-[270px]' />
                          <div className='p-4 bg-gray-800 absolute bottom-0 left-6 z-10 text-white text-2xl font-bold'>
                              <div className="text-3xl">16</div>
                              JAN 
                          </div>
                      </div>
                      <div className="px-4 py-6">
                        <div className="flex gap-x-4 my-4">
                            <div className='flex gap-x-3 items-center'>
                              <BiUser className='primary-color font-bold' />
                              <p className="font-bold uppercase text-md text-gray-900">
                                Admin
                              </p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                              <BiComment className='primary-color font-bold' />
                              <p className="font-bold uppercase text-md text-gray-900">
                                3 Comments
                              </p>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl text-gray-900 transition duration-300 blog-header">
                        Biggest Construction in New York, USA
                        </h1>
                        <p className="text-lg text-gray-500 mt-4">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                    <div className="blog-card w-100 shadow-lg">
                      <div className="blog-img relative w-100 overflow-hidden">
                          <img src={blog3} alt="" className='object-cover w-100 h-[270px]' />
                          <div className='p-4 bg-gray-800 absolute bottom-0 left-6 z-10 text-white text-2xl font-bold'>
                              <div className="text-3xl">16</div>
                              JAN 
                          </div>
                      </div>
                      <div className="px-4 py-6">
                        <div className="flex gap-x-4 my-4">
                            <div className='flex gap-x-3 items-center'>
                              <BiUser className='primary-color font-bold' />
                              <p className="font-bold uppercase text-md text-gray-900">
                                Admin
                              </p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                              <BiComment className='primary-color font-bold' />
                              <p className="font-bold uppercase text-md text-gray-900">
                                3 Comments
                              </p>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl text-gray-900 transition duration-300 blog-header">
                        Biggest Construction in New York, USA
                        </h1>
                        <p className="text-lg text-gray-500 mt-4">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                </div>
        </div>
      </div>

      {/* faq */}
      <div className="faq">
            <div className="container mx-auto p-6 md:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className='bg-white'>
                    <h4 className="primary-color font-bold text-lg mb-2">DROP A MESSAGE</h4>
                    <h2 className="text-3xl font-bold">Request A Quote</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 my-4">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text font-medium uppercase">Fullname</span>
                        </label>
                        <input type="text" placeholder="Enter Your FullName" className="input focus:outline-none rounded-none border border-gray-300 w-full max-w-xs" />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text font-medium uppercase">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" className="input rounded-none border border-gray-300 w-full max-w-xs focus:outline-none" />
                      </div>
                    </div>
                    <div className="form-control w-full my-4">
                      <label className="label">
                        <span className="label-text font-medium uppercase">Choose Subject</span>
                      </label>
                      <select className="select w-full rounded-none focus:outline-none border border-gray-300">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                      </select>
                    </div>
                    <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium uppercase">Message</span>
                    </label> 
                    <textarea className="textarea focus:outline-none w-full rounded-none border border-gray-300 h-64" placeholder="Message"></textarea>
                    
                  </div>
                  <button className="btn bg-primary-color border-none mt-4 rounded-none text-gray-900 hover:bg-amber-700 ">Send Message</button>
                  </div>
                  <div>
                    <h4 className="primary-color font-bold text-lg">Frequently Ask Question</h4>
                    <h1 className="text-3xl md:text-6xl font-bold my-4">
                    You Want To Ask Something From Us?
                    </h1>
                    <p className='text-gray-400 text-left mb-6'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <Accordion>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  What harsh truths do you prefer to ignore?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  Exercitation in fugiat est ut ad ea cupidatat ut in
                                  cupidatat occaecat ut occaecat consequat est minim minim
                                  esse tempor laborum consequat esse adipisicing eu
                                  reprehenderit enim.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  Is free will real or just an illusion?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  In ad velit in ex nostrud dolore cupidatat consectetur
                                  ea in ut nostrud velit in irure cillum tempor laboris
                                  sed adipisicing eu esse duis nulla non.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  What harsh truths do you prefer to ignore?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  Exercitation in fugiat est ut ad ea cupidatat ut in
                                  cupidatat occaecat ut occaecat consequat est minim minim
                                  esse tempor laborum consequat esse adipisicing eu
                                  reprehenderit enim.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  Is free will real or just an illusion?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  In ad velit in ex nostrud dolore cupidatat consectetur
                                  ea in ut nostrud velit in irure cillum tempor laboris
                                  sed adipisicing eu esse duis nulla non.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                  </Accordion>
                  </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Home 