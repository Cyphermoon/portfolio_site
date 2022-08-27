import Image from 'next/image'
import React from 'react'
import { socialCardType } from '../../types'

const SocialCard = ({ title, imageURL }: socialCardType) => (
    <div className='w-20 h-20 lg:w-32 lg:h-32 space-y-2 md:p-2 rounded-lg bg-slate-100 lg:drop-shadow-lg'>
        <figure className='w-fill h-3/5 lg:3/4 relative'>
            <Image
                style={{ filter: "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)" }}
                layout='fill'
                src={imageURL}
                alt={`${title} logo`} />
        </figure>
        <p className='text-label_md text-center'>{title}</p>
    </div>
)

const SocialMediaDisplay = () => {
    return (
        <div className='grid grid-cols-3 gap-4 md:gap-6 content-start h-max'>
            <SocialCard title='twitter' imageURL='/icons/twitter__logo.svg' />
            <SocialCard title='github' imageURL='/icons/github__logo.svg' />
            <SocialCard title='linkedin' imageURL='/icons/linkedin__logo.svg' />
            <SocialCard title='whatsapp' imageURL='/icons/whatsapp__logo.svg' />
        </div>
    )
}

export default SocialMediaDisplay