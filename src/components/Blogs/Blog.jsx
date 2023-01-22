import React from 'react'
import './Blog.css'
import { blogs } from './data'
import BlogCard from './BlogCard'

const Blog = ({title}) => {
  return (
        <div className="blogs w-100 min-h-screen grid place-items-center">
        <div className="container mx-auto px-6 md:px-24">
                  {
                    title !== '' ?
                    <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">Our Blog</h4>
                    : <></>
                  }
                <h1 className="text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                    {
                      title !== '' ?
                      title :
                      
                      <></>
                    }
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mt-6 md:mt-12">
                    {
                      blogs.map(blog => (
                        <React.Fragment key={blog.id}>
                          <BlogCard blog={blog} />
                        </React.Fragment>
                      ))
                    }            
                </div>
        </div>
      </div>  
      
      )
}

export default Blog