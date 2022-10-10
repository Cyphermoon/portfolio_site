import React, { useEffect, useRef, useState } from 'react'


const CursorFollow = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [isHovering, setIsHovering] = useState<boolean>();

    const setCursorFollow = (cursorRef: React.RefObject<HTMLDivElement>, top: number, left: number) => {
        if (cursorRef.current) cursorRef.current.style.transform = `translate(${left}px, ${top}px )`
    }

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
        <div ref={cursorRef} className={`absolute w-14 z-50 h-14 transition-transform duration-[25ms] ease-linear pointer-events-none rounded-full border dark:border-slate-400 border-slate-600 bg-slate-900 opacity-30 dark:bg-slate-100`}></div>
    )
}

export default CursorFollow