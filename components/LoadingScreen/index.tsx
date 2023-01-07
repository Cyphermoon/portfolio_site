import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import MoonBody from './MoonBody'
import MoonCrescent from './MoonCrescent'

const LoadingScreen = () => {
    const rootComp = useRef<HTMLDivElement>(null)
    const t1 = useRef<GSAPTimeline>()

    useEffect(() => {
        const ctx = gsap.context(() => {
            t1.current = gsap.timeline({
                defaults: {
                    ease: "power3.inOut",
                    duration: 1,
                }
            })
                .to("#moon_container", {
                    width: "85px",
                })
                .to("#moon_container", {
                    rotation: 180,
                    duration: .8
                }, "<.4")
                .to("#moon_container", {
                    width: "500px",
                    duration: .9
                }, "<.35")
        }, rootComp)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={rootComp} className='w-screen relative h-screen bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400'>
            <div id='moon_container' className='
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    grid grid-cols-2 justify-items-center items-center p-4 w-8/12'>
                <MoonCrescent />
                <MoonBody />
            </div>
        </div>
    )
}

export default LoadingScreen