import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { IMAGE_DARK_FILTER, IMAGE_LIGHT_FILTER } from '../../constants'
import { useTheme } from '../../context/ThemeProvider'
import { socialCardType, socialMediaDisplayType } from '../../types'

const SocialCard = ({ title, imageURL, href, isDark }: socialCardType) => {

    return (
        <Link href={href} passHref={true}>
            <a className='w-20 block h-20 lg:w-32 lg:h-32 space-y-2 md:p-2 rounded-lg bg-slate-100 dark:bg-slate-700 lg:drop-shadow-lg transition duration-200 ease-in-out hover:translate-y-6 hover:rounded-none hover:bg-slate-300 dark:hover:bg-slate-500' >
                <figure className='w-fill h-3/5 lg:3/4 relative dark:fill-white'>
                    <Image
                        style={{
                            filter: `${isDark ? IMAGE_LIGHT_FILTER : IMAGE_DARK_FILTER}`
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
    const { isDark } = useTheme()

    useEffect(() => {
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
    }, [])

    return (
        <div className='w-full lg:w-1/2'>
            <h5 className='dark:text-slate-400 mb-5 text-center lg:text-left'>Social Medias</h5>
            <div className='social_display flex flex-row justify-between items-center lg:grid lg:grid-cols-4 gap-3 md:gap-8 lg:gap-3 content-start h-max'>
                {social_medias.map((data, idx) => (
                    <SocialCard
                        key={idx}
                        title={data.displayText}
                        isDark={isDark}
                        imageURL={data.social_media_logo}
                        href={data.url} />
                ))}
            </div>
        </div>

    )
}

export default SocialMediaDisplay