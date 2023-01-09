import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import { useAnimationClass } from '../../hooks/animationHook/index.hook'
import { cursorTrackerPropType } from '../../types'

type eyeSocketPropType = {
    rotation: number
}

const EyeSocket = ({ rotation }: eyeSocketPropType) => {
    const { isDark } = useTheme()

    return (
        <div className='w-10 relative h-10 border border-slate-700 dark:border-slate-400 rounded-full flex items-center justify-center'>

            <div className='h-5 w-2 flex flex-col items-center justify-end' style={{ transform: `rotate(${rotation + 90}deg)` }}>

                <Image
                    src={"/icons/circle.svg"}
                    style={{
                        filter: `${isDark
                            ? "invert(74%) sepia(2%) saturate(3408%) hue-rotate(176deg) brightness(94%) contrast(66%)"
                            : "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)"}`
                    }}
                    alt="Eyeball svg" width={10} height={10} />
            </div>
        </div>
    )
}

const CursorTracker = ({ addAnimation }: cursorTrackerPropType) => {
    let cursorRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState(0);

    const angle = (x1: number, y1: number, x2: number, y2: number) => {
        const dx = x2 - x1
        const dy = y2 - y1

        const angleInRad = Math.atan2(dy, dx);
        const angleInDeg = angleInRad * 180 / Math.PI

        return angleInDeg
    }

    //animation code
    const animationClasses = {
        animatable: "-left-[100px] opacity-0",
        non_animatable: "left-[100px] opacity-100"
    }

    const { animationClass } = useAnimationClass(addAnimation, animationClasses)

    useEffect(() => {

        if (addAnimation) {
            const cursorEyesAnimation = gsap.to("#cursor_eyes", {
                left: "98px",
                opacity: 1,

            })

            addAnimation(cursorEyesAnimation, 2.3)

            return () => {
                cursorEyesAnimation.revert()
            }
        }

    }, [addAnimation])

    const handleMouseMove = (e: MouseEvent) => {
        //define variables to move the eye socket component
        let boundingClientRect = cursorRef.current?.getBoundingClientRect();
        let centerX = boundingClientRect?.left ?? 0 + (boundingClientRect?.width ?? 0 / 2)
        let centerY = boundingClientRect?.top ?? 0 + (boundingClientRect?.height ?? 0 / 2)

        let mouseX = e.clientX;
        let mouseY = e.clientY;

        setRotation(angle(mouseX, mouseY, centerX, centerY));
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }

    })

    return (
        <div ref={cursorRef} id="cursor_eyes" className={`flex space-x-4 absolute top-20 ${animationClass}`}>
            <EyeSocket rotation={rotation} />
            <EyeSocket rotation={rotation} />
        </div>
    )
}

export default CursorTracker