import React from 'react'
import ProjectCard from '../ProjectCard'

const ProjectDisplaySection = () => {
    return (
        <section className='space-y-8'>
            <h2>Projects</h2>
            <div className='w-full md:w-max grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-start gap-y-9 sm:gap-5'>
                <ProjectCard
                    title='Chat dapp'
                    description='lorem ipsum dolor sit amet cool'
                    imageURL='/images/chat-dapp.png' />

                <ProjectCard
                    title='Discord clone'
                    description='lorem ipsum dolor sit amet cool'
                    imageURL='/images/discord-clone.png' />

                <ProjectCard
                    title='Netflix clone'
                    description='lorem ipsum dolor sit amet cool'
                    imageURL='/images/netflix-clone.png' />

                <ProjectCard
                    title='Chat dapp'
                    description='lorem ipsum dolor sit amet cool'
                    imageURL='/images/chat-dapp.png' />

                <ProjectCard
                    title='Chat dapp'
                    description='lorem ipsum dolor sit amet cool'
                    imageURL='/images/chat-dapp.png' />
            </div>
        </section>
    )
}

export default ProjectDisplaySection