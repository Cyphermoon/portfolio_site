import React from 'react'

const MoonBody = () => {
    return (
        <div className='w-20 h-20 relative z-10 bg-slate-600 dark:bg-blue-300 rounded-full shadow-lg clip-moon'>
            <div className="details"></div>
            <div className="details top-8 left-3 w-5 h-5"></div>
            <div className="details top-11 left-8 w-4 h-4"></div>
        </div>
    )
}

export default MoonBody