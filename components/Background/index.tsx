import React, { useEffect, useState } from 'react'
import CursorFollow from '../CursorFollow'
import CursorTracker from '../CursorTracker'

type backgroundType = {
    children: React.ReactNode
}

const Background = ({ children }: backgroundType) => {
    let [isMinimumWidth, setIsMinWidth] = useState<boolean>()

    useEffect(() => {
        let mql = window.matchMedia('(min-width: 950px)');
        setIsMinWidth(mql.matches)
    }, [])


    return (
        <div className={`transition-colors ease-in-out duration-500 w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10`}>
            {isMinimumWidth && <CursorFollow />}
            {isMinimumWidth && <CursorTracker />}
            {children}
        </div>
    )
}

export default Background