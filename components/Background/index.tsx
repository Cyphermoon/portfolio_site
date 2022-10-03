import React from 'react'
import CursorFollow from '../CursorFollow'

type backgroundType = {
    children: React.ReactNode
}

const Background = ({ children }: backgroundType) => {
    return (
        <div className={`transition-colors ease-in-out duration-500 w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10`}>
            <CursorFollow />
            {children}
        </div>
    )
}

export default Background