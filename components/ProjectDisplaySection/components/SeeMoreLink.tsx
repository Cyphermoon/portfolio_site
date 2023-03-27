import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTiltEffect } from '../../../hooks/index.util'

const SeeMoreLink = () => {
    const { tiltCard, removeTiltEffect } = useTiltEffect()

    return (
        <Link href="/projects">
            <div
                className='min-h-[490px] w-full sm:w-72 sm:min-h-[384px] md:min-h-[512px] md:w-[365px] lg:w-96 bg-slate-400 
                grid place-items-center'
                onMouseMove={tiltCard}
                onMouseOut={removeTiltEffect}>

                <div className='flex flex-col items-center space-y-3 p-4 rounded-2xl bg-slate-300 w-1/2'>
                    <Image src={"/icons/see_more_icon.svg"} alt="see more icon" width={80} height={80} />
                    <span className='text-slate-700 text-sm '>see more projects</span>
                </div>

            </div>
        </Link>
    )
}

export default SeeMoreLink