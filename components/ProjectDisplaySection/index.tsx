import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
import { projectDisplaySectionType } from '../../types'
import ProjectCard from '../ProjectCard'
import SeeMoreLink from './components/SeeMoreLink'
import { truncate } from '../../utils/index.util'

const ProjectDisplaySection = ({ projects, addAnimation }: projectDisplaySectionType) => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const projectDisplayAnimation = gsap.from(".project_display_section > * > *", {
            scrollTrigger: {
                trigger: ".project_display_section"
            },
            translateY: +70,
            duration: 1,
            opacity: 0,
            stagger: .5
        })


        return () => {
            projectDisplayAnimation.revert()
        }
    }, [addAnimation])


    return (
        <section id='projects_section' className='project_display_section space-y-8'>
            {projects.length > 0 && <h2 className='dark:text-slate-300'>Projects</h2>}
            <div className='w-full md:w-max grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-start gap-y-9 sm:gap-5'
                style={{ perspective: "1000px" }}>

                {projects.map((project, idx) => {
                    return <ProjectCard
                        key={idx}
                        title={project.title}
                        description={truncate(project.description, 150)}
                        imageURL={project.cover_image}
                        projectId={project["_id"]} />
                })}
                <SeeMoreLink />
            </div>
        </section>
    )
}

export default ProjectDisplaySection