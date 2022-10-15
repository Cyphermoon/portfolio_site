import gsap from 'gsap'
import Link from 'next/link'
import React, { MouseEvent, useEffect } from 'react'
import CursorTracker from '../components/CursorTracker'
import PageHead from '../components/PageHead'

const Testing = () => {

    const tiltCard = (e: MouseEvent<HTMLDivElement>) => {

        const multiplier = 25

        let cardWidth = e.currentTarget.offsetWidth
        let cardHeight = e.currentTarget.offsetHeight

        const X = e.nativeEvent.offsetX
        const Y = e.nativeEvent.offsetY

        let mouseX = X - (cardWidth / 2)
        let mouseY = Y - (cardHeight / 2)


        let yRotate = ((mouseX / (cardWidth / 2))) * multiplier
        let xRotate = ((mouseY / (cardHeight / 2))) * -multiplier;

        console.log(xRotate, yRotate)


        gsap.to(e.currentTarget, {
            rotateX: xRotate,
            rotateY: yRotate,
        })
    }


    return (
        <div className='space-y-16 grid place-items-center py-8'>
            <PageHead title="Portfolio | testing" />
            <h1>Testing</h1>
            <Link href="#" passHref >
                <a className="group block relative shadow-lg shadow-blue-400 dark:shadow-gray-900 w-full md:w-3/4 
                bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white hover:text-slate-800 dark:hover:text-slate-200 dark:text-slate-200 sm:mr-7
                ">
                    <span className='w-full block h-full absolute rounded-full bg-red-300 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />

                    <span className='block z-10 relative'>
                        Contact me
                    </span>

                </a>
            </Link>

            <div>
                <h2>Project Card</h2>
                <Link href="#">
                    <div
                        className='min-h-[490px] w-full sm:w-72 sm:min-h-[384px] md:min-h-[512px] md:w-[365px] lg:w-96 bg-slate-300 relative before:w-full cursor-pointer
                        before-h-full before:transition-opacity before:duration-100ms
                        before:inset-0 before:z-10 before:absolute before:bg-slate-900 dark:shadow-2xl dark:shadow-slate-700 md:dark:shadow-slate-800 before:opacity-60 dark:before:opacity-40
                        md:dark:before:opacity-70 dark:bg-slate-800
                        before:hover:opacity-80 dark:before:hover:opacity-50'
                        style={{ transform: "perspective(1000px)" }}
                        onMouseMove={tiltCard}>
                        {/* <Image src={"#"} alt="project image 1" layout='fill' objectFit='cover' /> */}

                        <div className="absolute top-3 left-3 z-10 text-gray-100 dark:text-slate-300 space-y-2">
                            <h3 className='dark:text-slate-300'>Goodrate store</h3>
                            <p className='text-label_md'>It is a very cool site</p>
                        </div>
                    </div>
                </Link>
            </div>

            <CursorTracker />
        </div>
    )
}

export default Testing