import Image from 'next/image'
import React from 'react'
import { OtherProjectType } from '../../types'

const OtherProject = ({ imageURL, altContent, projectName, description }: OtherProjectType) => {
  return (
    <div className='min-w-full sm:w-72 md:w-[312px] space-y-4 scale-95'>
      <figure className='relative w-full h-52 md:h-40'>
        <Image src={imageURL} alt={altContent} layout="fill" objectFit='cover' />
      </figure>
      <div className='space-y-1'>
        <h3>{projectName}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}


const OtherProjectDisplay = () => {
  return (
    <section className='space-y-8'>
      <h2>Other Project</h2>
      <div className='w-full md:w-max grid grid-cols-1 justify-start sm:grid-cols-2 lg:grid-cols-3 justify-items-start md:justify-items-start gap-y-16 sm:gap-14'>
        <OtherProject
          imageURL="/images/netflix-clone.png"
          altContent='netflix clone image'
          projectName='Netflix clone'
          description='lorem ipsum dolor ament sit color, sit ament, colondar beef wirrey  sit ament, colondar beef wirrey' />

        <OtherProject
          imageURL="/images/chat-dapp.png"
          altContent='netflix dapp image'
          projectName='Chat dapp'
          description='lorem ipsum dolor ament sit color, sit ament, colondar beef wirrey  sit ament, colondar beef wirrey' />

        <OtherProject
          imageURL="/images/netflix-clone.png"
          altContent='netflix clone image'
          projectName='Netflix clone'
          description='lorem ipsum dolor ament sit color, sit ament, colondar beef wirrey' />
      </div>
    </section>
  )
}

export default OtherProjectDisplay