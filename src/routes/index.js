import React from 'react'
import { useRoutes } from 'react-router'
import Layout from '../layouts'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Pricing from '../pages/Pricing'
import Project from '../pages/Project'
import Service from '../pages/Service'

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    element: <Home />,
                    index: true
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'service',
                    element: <Service />
                },
                {
                    path: 'project',
                    element: <Project />
                },
                {
                    path: 'pricing',
                    element: <Pricing />
                },
                {
                    path: 'blog',
                    element: <Blog />
                },
                {
                    path: 'contact',
                    element: <Contact />
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