import React, { useEffect, useState } from 'react'
import { backgroundType } from '../../types'
import CursorFollow from '../CursorFollow'
import CursorTracker from '../CursorTracker'

const Background = ({ children, addAnimation }: backgroundType) => {
    let [isMinimumWidth, setIsMinWidth] = useState<boolean>()

    useEffect(() => {
        let mql = window.matchMedia('(min-width: 950px)');
        setIsMinWidth(mql.matches)
    }, [])


    return (
        <div className={`w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-slate-400 transition-colors duration-200 pb-10`}>
            {isMinimumWidth && <CursorFollow addAnimation={addAnimation} />}
            {isMinimumWidth && <CursorTracker addAnimation={addAnimation} />}
            {children}
        </div>
    )
}

export default Background