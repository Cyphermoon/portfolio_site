import gsap from 'gsap'
import React, { useCallback, useEffect, useRef } from 'react'
import MoonBody from './MoonBody'
import MoonCrescent from './MoonCrescent'
import SplitScreen from './SplitScreen'

type loadingScreenPropType = {
    setLoading?: Function
}

const LoadingScreen = ({ setLoading }: loadingScreenPropType) => {
    const rootComp = useRef<HTMLDivElement>(null)
    const t1 = useRef<GSAPTimeline>()

    const update = useCallback(() => {
        if (setLoading) {
            setLoading(false);
        }
    }, [setLoading])

    useEffect(() => {
        const animationProps = {
            moon: {
                start: "210px",
                end: "300px",
                endDuration: 1.3
            },
            container: {
                rotate: "180",
                duration: .8,
            },
            split_screen: {
                travelDistance: "100%",
                duration: 1.5
            },

            crescentFade: {
                opacity: "0",
                duration: 1
            }

        }

        const ctx = gsap.context(() => {
            t1.current = gsap.timeline({
                defaults: {
                    ease: "power3.inOut",
                    duration: 1,
                },
            })
                .to("#moon_crescent", {     // pull crescent to the right
                    translateX: `${animationProps.moon.start}`,
                })
                .to("#moon_body", {         // pull body to the left
                    translateX: `-${animationProps.moon.start}`,
                }, "<")
                .to("#moon_container", {    // rotate both element
                    rotation: animationProps.container.rotate,
                    duration: animationProps.container.duration
                }, "<.5")
                .to("#moon_crescent", {     // pull crescent to the left
                    translateX: `-${animationProps.moon.end}`,
                    duration: animationProps.moon.endDuration,
                }, "<.55")
                .to("#moon_body", {         // pull body to the right
                    translateX: `${animationProps.moon.end}`,
                    duration: animationProps.moon.endDuration,

                }, "<")
                .to("div[data-animation='pull-left']", {    //split screen left
                    translateX: `-${animationProps.split_screen.travelDistance}`,
                    duration: animationProps.split_screen.duration,
                }, "<.11")
                .to("div[data-animation='pull-right']", {  // split screen right
                    translateX: `${animationProps.split_screen.travelDistance}`,
                    duration: animationProps.split_screen.duration,
                    onComplete: update,
                }, "<")
                .to("#moon_container > *", {    // fade the crescent and moon
                    opacity: `${animationProps.crescentFade.opacity}`,
                    duration: animationProps.crescentFade.duration
                }, "<")
        }, rootComp)

        return () => ctx.revert()
    }, [update])

    return (
        <div ref={rootComp} className='w-screen bg-transparent bg-opacity-0 pointer-events-none z-[100] overflow-hidden fixed h-screen flex'>

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