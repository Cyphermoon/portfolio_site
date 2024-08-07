import Link from 'next/link'
import { IoMdEye } from 'react-icons/io'
import { useTiltEffect } from '../../../hooks/index.util'

const SeeMoreLink = () => {
    const { tiltCard, removeTiltEffect } = useTiltEffect()

    return (
        <Link href="/projects">
            <div
                className='min-h-[490px] w-full sm:min-h-[384px] md:min-h-[512px] grid place-items-center cursor-pointer bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 dark:from-sky-500  dark:to-sky-600'
                onMouseMove={tiltCard}
                onMouseOut={removeTiltEffect}>

                <div className='flex flex-col items-center space-y-3 p-4 rounded-2xl shadow-xl w-1/2 dark:text-blue-200 text-slate-300'>
                    <IoMdEye className='text-8xl' />
                    <span className='text--300 text-sm '>see all projects</span>
                </div>

            </div>
        </Link>
    )
}

export default SeeMoreLink