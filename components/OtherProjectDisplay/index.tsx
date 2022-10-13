import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useTiltEffect } from '../../hooks/index.util'
import { otherProjectDisplayType, OtherProjectType } from '../../types'
import { truncate } from '../ProjectDisplaySection'

const OtherProject = ({ imageURL, altContent, projectName, description, id }: OtherProjectType) => {
  const { tiltCard, removeTiltEffect } = useTiltEffect()

  return (
    <Link href={`/project/${encodeURIComponent(id)}`}>
      <div className='min-w-full sm:w-72 md:w-[312px] space-y-4 scale-95 cursor-pointer'>
        <figure className='relative w-full h-52 md:h-40 drop-shadow-2xl shadow-slate-900 dark:drop-shadow-none 
            before-h-full before:transition-opacity duration-100ms
            before:inset-0 before:z-10 before:absolute before:bg-black before:opacity-10
            before:hover:opacity-30'
          style={{ transform: "perspective(1000px)" }}
          onMouseMove={tiltCard} onMouseLeave={removeTiltEffect}>
          <Image src={imageURL} alt={altContent} layout="fill" objectFit='cover' />
        </figure>
        <div className='space-y-1 dark:text-slate-400'>
          <h3 className='dark:text-slate-300 capitalize'>{projectName}</h3>
          <p className='text-base normal-case'>{description}</p>
        </div>
      </div>
    </Link >
  )
}


const OtherProjectDisplay = ({ other_projects }: otherProjectDisplayType) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const otherProjectsDisplayAnimation = gsap.from(".other_project_display > * ", {
      scrollTrigger: {
        trigger: ".other_project_display"
      },
      translateX: -100,
      duration: 1,
      scale: .75,
      opacity: 0,
      stagger: .5,
    })


    return () => {
      otherProjectsDisplayAnimation.revert()
    }
  })

  if (other_projects.length <= 0) return null

  return (
    <section className='space-y-8'>
      <h2 className='dark:text-slate-300'>Other Project</h2>
      <div className='other_project_display w-full lg:w-11/12 md:w-max grid grid-cols-1 justify-start sm:grid-cols-2 lg:grid-cols-3 justify-items-start md:justify-items-start gap-y-16 sm:gap-14'>

        {other_projects.map((project, idx) => {
          return <OtherProject
            key={idx}
            id={project._id}
            imageURL={project.cover_image}
            altContent={project.altText}
            projectName={project.title}
            description={truncate(project.description, 150)} />
        })}
      </div>
    </section>
  )
}

export default OtherProjectDisplay