import Image from 'next/image'
import React from 'react'
import { projectCardType } from '../../types'

const ProjectCard = ({ title, description, imageURL }: projectCardType) => {
    return (
        <div className='aspect-[3/4] w-full md:w-96 bg-slate-300 relative before:w-full
        before-h-full before:transition-opacity duration-500ms
        before:inset-0 before:z-10 before:absolute before:bg-black before:opacity-10
        before:hover:opacity-50 '>
            <Image src={imageURL} alt="project image 1" layout='fill' objectFit='cover' />

            <div className="absolute top-3 left-3 z-10 text-gray-100">
                <h3>{title}</h3>
                <p className='text-label_md'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard