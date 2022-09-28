import React from 'react'
import { projectDisplaySectionType } from '../../types'
import ProjectCard from '../ProjectCard'

export const truncate = (text: string, end: number) => {
    return text.length > end ? text.substring(0, end) + "......" : text
}

const ProjectDisplaySection = ({ projects }: projectDisplaySectionType) => {
    return (
        <section className='space-y-8'>
            {projects.length > 0 && <h2 className='dark:text-slate-300'>Projects</h2>}
            <div className='w-full md:w-max grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-start gap-y-9 sm:gap-5'>
                {projects.map((project, idx) => {
                    return <ProjectCard
                        key={idx}
                        title={project.title}
                        description={truncate(project.description, 150)}
                        imageURL={project.cover_image}
                        projectId={project["_id"]} />
                })}

            </div>
        </section>
    )
}

export default ProjectDisplaySection