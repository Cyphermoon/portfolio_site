import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import MoonBody from './MoonBody'
import MoonCrescent from './MoonCrescent'
import SplitScreen from './SplitScreen'

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
                    width: "300%",
                    duration: 1.5
                }, "<.35")
                .to("div[data-animation='pull-left']", {
                    translateX: "-100%",
                    duration: 1.5,
                }, "<.1")
                .to("div[data-animation='pull-right']", {
                    translateX: "+100%",
                    duration: 1.5
                }, "<")
                .to("#moon_container > *", {
                    opacity: "0",
                    duration: 1
                }, "<")
        }, rootComp)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={rootComp} className='w-screen overflow-hidden relative h-screen flex'>

            <SplitScreen animationType="pull-left" />
            <SplitScreen animationType="pull-right" />

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