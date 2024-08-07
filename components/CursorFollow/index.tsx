import gsap from 'gsap';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAnimationClass } from '../../hooks/animationHook/index.hook';


const CursorFollow = ({ addAnimation }: cursorFollowPropType) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const setCursorFollow = (cursorRef: React.RefObject<HTMLDivElement>, top: number, left: number) => {
        if (cursorRef.current) cursorRef.current.style.transform = `translate(${left}px, ${top}px )`
    }

    //animation code
    const animationClasses = {
        animatable: "opacity-0 ",
        non_animatable: "opacity-30"
    }

    const { animationClass } = useAnimationClass(addAnimation, animationClasses)

    useEffect(() => {

        if (addAnimation) {
            const cursorFollowAnimation = gsap.to("#cursor_follow", {
                opacity: .3,

            })

            // add animation to timeline
            addAnimation(cursorFollowAnimation, 2.7)

            return () => {
                cursorFollowAnimation.revert()
            }
        }

    }, [addAnimation])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // define variables to move the cursorFollow component
        setTop(e.pageY - 22)
        setLeft(e.pageX - 22);

        setCursorFollow(cursorRef, top, left)
    }, [left, top])


    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    })


    return (
        <div ref={cursorRef} id="cursor_follow" className={`absolute w-14 z-50 h-14 transition-transform duration-[25ms] ease-linear pointer-events-none rounded-full border dark:border-slate-400 border-slate-600 bg-slate-900 dark:bg-slate-100 ${animationClass}`}></div>
    )
}

export default CursorFollow