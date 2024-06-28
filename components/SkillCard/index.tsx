import Image from 'next/image'
import React from 'react'
import { skillCardType } from '../../types'
import { DARK_LOGOS, IMAGE_DARK_FILTER, IMAGE_LIGHT_FILTER } from '../../constants'

const normalizeLanguageName = (name: string) => {
    return name.toLowerCase().replace(/\s/g, "_")
}

const getImageFilter = (title: string, isDark: boolean) => {
    // Normalize the title to ensure consistency in comparison
    const normalizedTitle = normalizeLanguageName(title);

    // Check if the normalized title is not included in the list of dark logos
    // If it's not, return undefined indicating no filter is needed
    if (!DARK_LOGOS.includes(normalizedTitle)) return undefined

    // If the title is in the list of dark logos, determine the filter based on the theme
    // If the theme is dark, return the dark image filter; otherwise, return the light image filter
    return isDark ? IMAGE_LIGHT_FILTER : IMAGE_DARK_FILTER
};

const SkillCard = ({ title, imageURL, altContent, width, height, isDark }: skillCardType) => {

    return (
        <div className={`${width ? width : "w-32"} ${height ? height : "h-32"}`}>
            {/* 
            Below div was added because the div above interrupted the gsap animation because of the transition classes applied to it. These classes were added to the below div to fix that issue.
             */}
            <div className='space-y-3 transition-transform duration-200 ease-in-out hover:scale-[1.30] w-full h-full'>
                <figure className='w-fill h-3/4 relative'>
                    <Image
                        layout='fill'
                        src={imageURL}
                        alt={altContent}
                        style={{
                            filter: getImageFilter(title, isDark)
                        }} />
                </figure>
                <p className='text-label_md text-center dark:text-slate-400'>{title}</p>
            </div>

        </div>
    )
}

export default SkillCard