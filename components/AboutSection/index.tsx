import gsap from 'gsap';
import React, { useEffect } from 'react'
import { aboutSectionType } from '../../types'

const AboutSection = ({ about_data, addAnimation }: aboutSectionType) => {

    let texts: string[] = about_data.texts;

    useEffect(() => {
        const aboutAnimation = gsap.from(".gsap_about", {
            scale: .85,
            translateY: +50,
            opacity: 0,
        })

        addAnimation(aboutAnimation, 2)

        return () => {
            aboutAnimation.revert()
        }
    }, [addAnimation])

    return (
        <section className='gsap_about p-4 mx-auto rounded-2xl text-center bg-slate-200 dark:bg-slate-800  space-y-4 w-full max-w-screen-md'>
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