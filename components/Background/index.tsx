import React, { useEffect, useState } from 'react'
import { backgroundType } from '../../types'
import CursorFollow from '../CursorFollow'
import CursorTracker from '../CursorTracker'
import { isDevMode } from '../../utils/index.util'
import { useNavState } from '../../context/NavProvider'

const Background = ({ children, addAnimation }: backgroundType) => {
    let [isMinimumWidth, setIsMinWidth] = useState<boolean>()
    const { navOpened } = useNavState()

    // check if the screen is minimum width
    useEffect(() => {
        let mql = window.matchMedia('(min-width: 950px)');
        setIsMinWidth(mql.matches)
    }, [])


    return (
        <div className={`w-screen min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-slate-400 transition-colors duration-200 pb-10 ${navOpened && "h-screen"}`}>
            {/* render components if screen is past minimum width */}
            {!isDevMode && isMinimumWidth && <CursorFollow addAnimation={addAnimation} />}
            {!isDevMode && isMinimumWidth && <CursorTracker addAnimation={addAnimation} />}
            {children}
        </div>
    )
}

export default Background