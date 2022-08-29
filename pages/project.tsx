import Image from 'next/image'
import React from 'react'
import Carousel from '../components/Carousel'
import Container from '../components/Container'
import FeatureContent, { FeatureContentImage } from '../components/FeatureContent'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import TechStackDisplay from '../components/TechStackDisplay'

const Project = () => {
    const carouselItems: {
        imageURL: string
    }[] = [
            {
                imageURL: "/images/discord-clone.png"
            },
            {
                imageURL: "/images/netflix-clone.png"
            }
        ]

    return (
        <div className='w-screen overflow-hidden bg-slate-100 text-gray-800 pb-10'>
            <PageHead title='Portfolio' />
            <Container>
                <Header >
                    <div className='flex flex-col items-center justify-center space-y-16'>
                        <div className="w-full md:w-9/12 items-center text-center space-y-6 flex flex-col">
                            <h1 className="text-[2.5rem] lg:text-display_lg font-bold text-center">Studdy buddy</h1>

                            <p className="text-title_sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam enim non consequuntur! Unde nulla totam in </p>



                            <button className="shadow-lg shadow-blue-400 w-full max-w-sm bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white">view site</button>
                        </div>
                        <figure className='w-96 md:w-[400px] lg:w-full max-w-6xl h-80 md:h-400px lg:h-[648px] min-h-min bg-slate-200 round-md'>
                            <Carousel carouselItems={carouselItems} />
                        </figure>
                    </div>

                </Header>
                <TechStackDisplay />
                <FeatureContent reversed={false} >
                    <div className='space-y-2 lg:w-2/5'>
                        <h3>Chat Functionality</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora voluptas ut corrupti, delectus quos asperiores aliquam sequi vel rerum voluptate aperiam doloribus nihil voluptatibus eaque temporibus, tempore praesentium expedita eos!
                        </p>
                    </div>

                    <FeatureContentImage imageURL="/images/chat-dapp.png" altContent="project image" />
                </FeatureContent>
                <FeatureContent reversed={true} >
                    <div className='space-y-2 lg:w-2/5'>
                        <h3>Chat Functionality</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora voluptas ut corrupti, delectus quos asperiores aliquam sequi vel rerum voluptate aperiam doloribus nihil voluptatibus eaque temporibus, tempore praesentium expedita eos!
                        </p>
                    </div>

                    <FeatureContentImage imageURL="/images/netflix-clone.png" altContent="project image" />
                </FeatureContent>
            </Container>

        </div>
    )
}

export default Project