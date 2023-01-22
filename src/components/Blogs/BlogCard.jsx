import React from 'react'
import './Blog.css'
import { BiComment, BiUser } from 'react-icons/bi'

const BlogCard = ({blog}) => {
  return (
    <div className="blog-card w-100 shadow-lg">
        <div className="blog-img relative w-100 overflow-hidden">
            <img src={blog.image} alt="" className='object-cover w-100 h-[270px]' />
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
                {blog.comment} Comments
                </p>
            </div>
        </div>
        <h1 className="text-2xl md:text-3xl text-gray-900 transition duration-300 blog-header">
            {
                blog.title
            }
        </h1>
        <p className="text-lg text-gray-500 mt-4">
            {
                blog.body
            }
        </p>
        </div>
    </div>
  )
}

export default BlogCard