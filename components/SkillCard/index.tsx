import Image from 'next/image'
import React from 'react'
import { skillCardType } from '../../types'

const SkillCard = ({ title, imageURL, altContent, width, height }: skillCardType) => {
    return (
        <div className={`${width ? width : "w-32"} ${height ? height : "h-32"} space-y-3`}>
            <figure className='w-fill h-3/4 relative transition-transform duration-200 ease-in-out hover:scale-[1.30]'>
                <Image layout='fill' src={imageURL} alt={altContent} />
            </figure>
            <p className='text-label_md text-center dark:text-slate-400'>{title}</p>
        </div>
    )
}

export default SkillCard