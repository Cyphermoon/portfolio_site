import React from 'react'
import { projectDisplayType } from '../../types'
import SmallProjectCard from '../SmallProjectCard'

interface Props {
    headerTitle: string,
    projects: projectDisplayType
}

const SmallProjectCardSection = ({ headerTitle, projects }: Props) => {
    return (
        <div className='space-y-8'>
            {projects.length > 0 ?
                <h4 className='font-black text-6xl capitalize dark:text-slate-400 text-slate-800'>{headerTitle}</h4> :
                null
            }
            <div className='grid gap-4 grid-cols-dynamic'>
                {projects.map((project, idx) => {
                    return (
                        <SmallProjectCard
                            key={idx}
                            projectId={project._id}
                            title={project.title}
                            imageURL={project.cover_image}
                            description={project.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SmallProjectCardSection