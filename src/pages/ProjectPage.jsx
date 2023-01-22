import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import Project from '../components/Project/Project'

const ProjectPage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | Project</title>
      </Helmet>
      <Banner title='Project Page' since={false} isBtn={false} />
      <Project />
    </>
  )
}

export default ProjectPage