import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'

const Layout = () => {
  return (
    <>
        <Header />
        <Navbar />

            <Outlet />
        <Footer />
    </>
  )
}

export default Layout