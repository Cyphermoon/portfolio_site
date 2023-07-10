import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEvent } from 'react'
import { useTiltEffect } from '../../hooks/index.util'
import { projectCardType } from '../../types'


/**
+ * Renders a project card component.
+ * @param {projectCardType} title - The title of the project card.
+ * @param {projectCardType} description - The description of the project card.
+ * @param {projectCardType} imageURL - The URL of the image for the project card.
+ * @param {projectCardType} projectId - The ID of the project.
+ * @return {JSX.Element} The rendered project card component.
+ */

const ProjectCard = ({ title, description, imageURL, projectId }: projectCardType) => {

    const { tiltCard, removeTiltEffect } = useTiltEffect()

    return (
        <Link href={`/project/${encodeURIComponent(projectId)}`}>
            <div className='min-h-[490px] w-full sm:w-72 sm:min-h-[384px] md:min-h-[512px] md:w-[365px] lg:w-96 bg-slate-300 relative before:w-full cursor-pointer group
                before-h-full before:transition-opacity before:duration-100ms
                before:inset-0 before:z-10 before:absolute before:bg-slate-900 dark:shadow-2xl dark:shadow-slate-700 md:dark:shadow-slate-800 before:opacity-60 dark:before:opacity-60
                md:dark:before:opacity-70 dark:bg-slate-800
                before:hover:opacity-80 dark:before:hover:opacity-50'
                onMouseMove={tiltCard} onMouseOut={removeTiltEffect}>
                <Image src={imageURL} alt={`${title} image`} layout='fill' objectFit='cover' />

                <div className="absolute top-3 left-3 z-10 text-gray-100 dark:text-slate-100 space-y-2">
                    <h3 className='capitalize'>{title}</h3>
                    <p className='text-label_md normal-case'>{description}</p>
                </div>

                <div className='absolute bottom-3 right-3 z-10 text-gray-300 dark:text-slate-400 lg:dark:text-slate-300 space-y-2 lg:hidden lg:group-hover:block'>
                    <p>see details</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard