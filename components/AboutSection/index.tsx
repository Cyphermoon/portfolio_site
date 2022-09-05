import React from 'react'
import { aboutSectionType } from '../../types'

const AboutSection = ({ about_data }: aboutSectionType) => {

    let texts: string[] = about_data?.content?.map((data) => {
        return data.children[0].text
    })

    return (
        <section className='p-4 mx-auto rounded-2xl text-center bg-slate-200 space-y-4 w-full max-w-screen-lg'>
            <h2>About</h2>
            <div className='text-left text-gray-700 space-y-4'>
                {texts.map((text, idx) => (
                    <p key={idx} className='text-base'>{text}</p>
                ))}

            </div>
        </section>
    )
}

export default AboutSection