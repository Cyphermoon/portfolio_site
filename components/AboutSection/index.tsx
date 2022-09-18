import React from 'react'
import { aboutSectionType } from '../../types'

const AboutSection = ({ about_data }: aboutSectionType) => {

    let texts: string[] = about_data?.content?.map((data: { children: { text: any }[] }) => {
        return data.children[0].text
    })

    return (
        <section className='p-4 mx-auto rounded-2xl text-center bg-slate-200 dark:bg-slate-800  space-y-4 w-full max-w-screen-md'>
            <h2 className='dark:text-slate-300'>About</h2>
            <div className='text-left text-gray-700 dark:text-slate-400 dark:leading-relaxed space-y-4'>
                {texts.map((text, idx) => (
                    <p key={idx} className='text-base'>{text}</p>
                ))}

            </div>
        </section>
    )
}

export default AboutSection