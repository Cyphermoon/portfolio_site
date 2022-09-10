import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '../../context/ThemeProvider'
import { socialCardType, socialMediaDisplayType } from '../../types'

const SocialCard = ({ title, imageURL, href }: socialCardType) => {
    const { isDark } = useTheme()

    return (
        <Link href={href} passHref={true}>
            <a className='w-20 block h-20 lg:w-32 lg:h-32 space-y-2 md:p-2 rounded-lg bg-slate-100 dark:bg-slate-700 lg:drop-shadow-lg' >
                <figure className='w-fill h-3/5 lg:3/4 relative dark:fill-white'>
                    <Image
                        style={{
                            filter: `${isDark
                                ? "invert(93%) sepia(16%) saturate(103%) hue-rotate(177deg) brightness(96%) contrast(96%)"
                                : "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)"}`
                        }}
                        layout='fill'
                        src={imageURL}
                        alt={`${title} logo`} />
                </figure>
                <p className='text-label_md text-center dark:text-slate-300'>{title}</p>
            </a>

        </Link>
    )
}

const SocialMediaDisplay = ({ social_medias }: socialMediaDisplayType) => {
    return (
        <div className='grid grid-cols-3 gap-4 md:gap-6 content-start h-max'>
            {social_medias.map((data, idx) => (
                <SocialCard
                    key={idx}
                    title={data.displayText}
                    imageURL={data.social_media_logo}
                    href={data.url} />
            ))}
        </div>
    )
}

export default SocialMediaDisplay