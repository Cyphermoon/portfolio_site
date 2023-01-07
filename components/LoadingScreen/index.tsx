import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

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

                <div className="w-16 h-16 rounded-full shadow-moon-outline shadow-slate-600 dark:shadow-blue-300"></div>

                <div className='w-20 h-20 relative z-10 bg-slate-600 dark:bg-blue-300 rounded-full shadow-lg clip-moon'>
                    <div className="details"></div>
                    <div className="details top-8 left-3 w-5 h-5"></div>
                    <div className="details top-11 left-8 w-4 h-4"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen