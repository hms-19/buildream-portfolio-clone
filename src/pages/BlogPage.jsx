import React from 'react'
import Banner from '../components/Banner/Banner'
import Blog from '../components/Blogs/Blog'

const BlogPage = () => {
  return (
    <>
      <Banner title='Blog Page' since={false} isBtn={false} />
      <Blog title={'All Blogs'} />
      <Blog title={''} />
      <Blog title={''} />

    </>
  )
}

export default BlogPage