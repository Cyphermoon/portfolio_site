import React from 'react'

const LoadingScreen = () => {
    return (
        <div className='w-screen relative h-screen bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400'>
            <div className='
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    grid grid-cols-2 justify-between items-center p-4'>

                <div className="w-16 h-16 rounded-full shadow-moon-outline shadow-slate-600 dark:shadow-blue-300"></div>

                <div className='w-20 h-20 relative z-10 bg-slate-600 dark:bg-blue-300 rounded-full shadow-lg clip-moon'>
                    <div className="details"></div>
                    <div className="details top-8 left-3 w-5 h-5"></div>
                    <div className="details top-11 left-8 w-4 h-4"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen