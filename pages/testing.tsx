import Link from 'next/link'
import React from 'react'

const Testing = () => {
    return (
        <div>
            <h1>Testing</h1>
            <Link href="#" passHref >
                <a className="group block relative shadow-lg shadow-blue-400 dark:shadow-gray-900 w-full md:w-3/4 
                bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white hover:text-slate-800 dark:hover:text-slate-200 dark:text-slate-200 sm:mr-7
                ">
                    <span className='w-full block h-full absolute rounded-full bg-red-300 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />

                    <span className='block z-10 relative'>
                        Contact me
                    </span>

                </a>
            </Link>
        </div>
    )
}

export default Testing