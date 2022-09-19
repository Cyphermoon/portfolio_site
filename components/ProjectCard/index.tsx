import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projectCardType } from '../../types'

const ProjectCard = ({ title, description, imageURL, projectId }: projectCardType) => {
    return (
        <Link href={`/project/${encodeURIComponent(projectId)}`}>
            <div className='min-h-[490px] w-full sm:w-72 sm:min-h-[384px] md:min-h-[512px] md:w-[365px] lg:w-96 bg-slate-300 relative before:w-full cursor-pointer
            before-h-full before:transition-opacity duration-100ms
            before:inset-0 before:z-10 before:absolute before:bg-slate-900 dark:shadow-2xl dark:shadow-slate-700 md:dark:shadow-slate-800 before:opacity-60 dark:before:opacity-40
            md:dark:before:opacity-70 dark:bg-slate-800
            before:hover:opacity-80 dark:before:hover:opacity-50' >
                <Image src={imageURL} alt="project image 1" layout='fill' objectFit='cover' />

                <div className="absolute top-3 left-3 z-10 text-gray-100 dark:text-slate-300 space-y-2">
                    <h3 className='dark:text-slate-300'>{title}</h3>
                    <p className='text-label_md'>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard