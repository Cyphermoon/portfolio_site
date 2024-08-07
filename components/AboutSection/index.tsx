import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { aboutSectionType } from '../../types'
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = ({ about_data }: aboutSectionType) => {

    let texts: string[] = about_data.texts;
    const animationApplied = useRef(false); // Ref to store the animation state

    useEffect(() => {

        const schoolHistoryAnimation = gsap.from(".gsap_about > *", {
            scrollTrigger: {
                trigger: ".gsap_about",
                toggleActions: "restart pause resume pause",
                id: "about_section"
            },
            stagger: .3,
            translateY: +50,
            duration: .75,
        })


        return () => {
            schoolHistoryAnimation.revert()
        }


    }, [])

    return (
        <section className='gsap_about space-y-6 pt-20 lg:pt-0'>
            <h2 className='dark:text-slate-300 hidden lg:block'>About</h2>
            <div className='p-4 lg:py-12 lg:px-8 mx-auto rounded-xl bg-slate-200 dark:bg-slate-800 w-full flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-10 '>
                <div className='lg:w-5/12 flex flex-col items-center justify-between space-y-8 relative'>
                    <div className='flex flex-col items-center justify-between absolute -top-[100px] lg:top-0 lg:relative w-[220px] h-[220px] lg:w-[290px] lg:h-[290px] rounded-full bg-slate-200 dark:bg-slate-800 lg:bg-transparent'>
                        <figure className='absolute top-[50%] -translate-y-1/2 lg:translate-y-0 lg:top-0 lg:relative w-[200px] h-[200px] lg:w-[290px] lg:h-[290px] rounded-full overflow-hidden'>
                            <Image
                                src={about_data.profilePhoto.url}
                                className='pointer-events-none'
                                layout='fill'
                                alt={about_data.profilePhoto.alt}
                                objectFit='cover' />
                        </figure>
                    </div>

                </div>
                <h2 className='dark:text-slate-300 block lg:hidden text-center mt-[150px] lg:mt-0 mb-3'>About me</h2>

                <div className='text-left text-gray-700 dark:text-slate-400 dark:leading-relaxed space-y-4 lg:w-7/12'>
                    {texts.map((text, idx) => (
                        <p key={idx} className='text-base'>{text}</p>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default AboutSection