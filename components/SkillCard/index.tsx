import Image from 'next/image'
import React from 'react'
import { skillCardType } from '../../types'

const SkillCard = ({ title, imageURL, altContent }: skillCardType) => {
    return (
        <div className='w-32 h-32 space-y-3'>
            <figure className='w-fill h-3/4 relative'>
                <Image layout='fill' src={imageURL} alt={altContent} />
            </figure>
            <p className='text-label_md text-center'>{title}</p>
        </div>
    )
}

export default SkillCard