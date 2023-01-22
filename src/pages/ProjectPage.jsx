import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import PageAnimation from '../components/PageAnimation/PageAnimation'
import Project from '../components/Project/Project'

const ProjectPage = () => {
  return (
    <>
      <Helmet>
            <title>BUILDREM | Project</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title='Project Page' since={false} isBtn={false} />
          <Project />
        </>
      </PageAnimation>
    </>
  )
}

export default ProjectPage