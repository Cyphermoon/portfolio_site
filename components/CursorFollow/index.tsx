import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'


const CursorFollow = ({ addAnimation }: cursorFollowPropType) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [isHovering, setIsHovering] = useState<boolean>();

    const setCursorFollow = (cursorRef: React.RefObject<HTMLDivElement>, top: number, left: number) => {
        if (cursorRef.current) cursorRef.current.style.transform = `translate(${left}px, ${top}px )`
    }

    useEffect(() => {

        if (addAnimation) {
            const cursorFollowAnimation = gsap.to("#cursor_follow", {
                opacity: .3,

            })

            addAnimation(cursorFollowAnimation, 2.7)

            return () => {
                cursorFollowAnimation.revert()
            }
        }

    }, [addAnimation])


    useEffect(() => {
        document.addEventListener("mousemove", e => {
            setTop(e.pageY - 22)
            setLeft(e.pageX - 22);

            setCursorFollow(cursorRef, top, left)
        })

        let anchorTags = document.querySelectorAll("a");

        anchorTags.forEach((tag) => {
            tag.addEventListener("mouseenter", () => {
                setIsHovering(true)
            })

            tag.addEventListener("mouseleave", () => {
                setIsHovering(false)
            })
        })
    })


    return (
        <div ref={cursorRef} id="cursor_follow" className={`absolute w-14 z-50 h-14 transition-transform duration-[25ms] ease-linear pointer-events-none rounded-full border dark:border-slate-400 border-slate-600 bg-slate-900 dark:bg-slate-100 opacity-0`}></div>
    )
}

export default CursorFollow