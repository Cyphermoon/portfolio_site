import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { start } from 'repl'
import { useTheme } from '../../context/ThemeProvider'
import { socialCardType, socialMediaDisplayType } from '../../types'

const SocialCard = ({ title, imageURL, href }: socialCardType) => {
    const { isDark } = useTheme()

    return (
        <Link href={href} passHref={true}>
            <a className='w-20 block h-20 lg:w-32 lg:h-32 space-y-2 md:p-2 rounded-lg bg-slate-100 dark:bg-slate-700 lg:drop-shadow-lg transition duration-200 ease-in-out hover:-translate-y-6 hover:rounded-none hover:bg-slate-300 dark:hover:bg-slate-500' >
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
                <p className='text-label_md lowercase text-center dark:text-slate-300'>{title}</p>
            </a>

        </Link>
    )
}

const SocialMediaDisplay = ({ social_medias, addAnimation }: socialMediaDisplayType) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const socialMediaDisplayAnimation = gsap.from(".social_display", {
            scrollTrigger: {
                trigger: ".social_display",
            },
            opacity: 0,
            duration: 2,
        })


        return () => {
            socialMediaDisplayAnimation.revert()
        }
    }, [addAnimation])

    return (
        <div className='social_display grid grid-cols-3 gap-4 md:gap-6 content-start h-max'>
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