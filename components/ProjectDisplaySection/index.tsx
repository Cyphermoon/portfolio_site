import gsap from 'gsap'
import { useEffect } from 'react'
import { projectDisplaySectionType } from '../../types'
import { truncate } from '../../utils/index.util'
import ProjectCard from '../ProjectCard'
import SeeMoreLink from './components/SeeMoreLink'

const ProjectDisplaySection = ({ projects, addAnimation }: projectDisplaySectionType) => {
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
    }, [])


    return (
        <section id='projects_section' className='project_display_section space-y-6'>
            {projects.length > 0 && <h2 className='dark:text-slate-300'>Projects</h2>}
            <div className='w-full grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-dynamic justify-items-center md:justify-items-start gap-4 sm:gap-5'
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