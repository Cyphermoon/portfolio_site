import React, { RefObject, useEffect, useRef, useState } from 'react'


const CursorFollow = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const setCursorFollow = (cursorRef: React.RefObject<HTMLDivElement>, top: number, left: number) => {
        if (cursorRef.current) cursorRef.current.style.transform = `translate(${left}px, ${top}px )`
    }

    useEffect(() => {
        document.addEventListener("mousemove", e => {
            setTop(e.pageY - 22)
            setLeft(e.pageX - 22);

            setCursorFollow(cursorRef, top, left)
        })
    })

    return (
        <div ref={cursorRef} className={`absolute w-12 z-50 h-12 transition-transform duration-100 ease-linear pointer-events-none rounded-full border-2 dark:border-slate-300 border-slate-800`}></div>
    )
}

export default CursorFollow