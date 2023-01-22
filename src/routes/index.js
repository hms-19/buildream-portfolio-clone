import React from 'react'
import { useRoutes } from 'react-router'
import Layout from '../layouts'
import AboutPage from '../pages/AboutPage'
import BlogPage from '../pages/BlogPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import PricingPage from '../pages/PricingPage'
import ProjectPage from '../pages/ProjectPage'
import ServicePage from '../pages/ServicePage'

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    element: <HomePage />,
                    index: true
                },
                {
                    path: 'about',
                    element: <AboutPage />
                },
                {
                    path: 'service',
                    element: <ServicePage />
                },
                {
                    path: 'project',
                    element: <ProjectPage />
                },
                {
                    path: 'pricing',
                    element: <PricingPage />
                },
                {
                    path: 'blog',
                    element: <BlogPage />
                },
                {
                    path: 'contact',
                    element: <ContactPage />
                },
                {
                    path: "*",
                    element: <NotFound />
                }
            ]
        }
    ])


    return routes
}

export default Router