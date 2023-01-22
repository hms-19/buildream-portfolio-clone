import React from 'react'
import Banner from '../components/Banner/Banner'
import Project from '../components/Project/Project'

const ProjectPage = () => {
  return (
    <>
      <Banner title='Project Page' since={false} isBtn={false} />
      <Project />
    </>
  )
}

export default ProjectPage