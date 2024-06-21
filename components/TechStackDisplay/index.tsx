import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { techStackDisplayType } from '../../types'
import SkillCard from '../SkillCard'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'
import { useTheme } from '../../context/ThemeProvider'

const TechStackDisplay = ({ tech_stacks, github_link }: techStackDisplayType) => {

    const t1 = useRef<GSAPTimeline>()
    const e1 = useRef<HTMLElement>(null)
    const { isDark } = useTheme()

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.registerPlugin(ScrollTrigger)
    //         const stacksAnimation = {
    //             translateY: +100,
    //             opacity: 0,
    //             rotateY: 180,
    //             stagger: .5,
    //         }

    //         t1.current = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".tech_stacks_container",
    //                 start: "top bottom",
    //             }
    //         })
    //             .from(".frontend_stacks > *", stacksAnimation)
    //             .from(".backend_stacks > *", stacksAnimation, "-=1")
    //             .from(".other_stacks > *", stacksAnimation, "-=0.5")
    //     }, [e1])


    //     return () => {
    //         ctx.revert()
    //     }
    // }, [])

    return (
        <section ref={e1} className='bg-slate-200  dark:bg-slate-700 relative p-8'>
            <h2 className='dark:text-slate-300 mb-12'>Tech Stacks</h2>
            {github_link &&
                <Link href={github_link} passHref>
                    <a target="_blank" title='View Code' rel="noopener noreferrer" className='absolute top-8 right-8 mt-0'>
                        <FaGithub className='text-slate-600 dark:text-slate-300 text-5xl' />
                    </a>

                </Link>
            }
            <div className='tech_stacks_container relative space-y-32'>
                {
                    tech_stacks.frontend?.length > 0 ?
                        <div className="space-y-4 dark:text-slate-400">
                            <h4 className='dark:text-slate-300 capitalize'>Front-end Stacks</h4>

                            <div className='frontend_stacks w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                                {tech_stacks?.frontend?.map((stack, idx) => {
                                    return <SkillCard
                                        key={idx}
                                        width='w-28'
                                        height='h-28'
                                        imageURL={stack.icon_url}
                                        title={stack.name}
                                        isDark={isDark}
                                        altContent={stack.altText} />
                                })}

                            </div>
                        </div> :
                        null
                }
                {
                    tech_stacks.backend?.length > 0 ?
                        <div className="space-y-4 dark:text-slate-400">
                            <h4 className='dark:text-slate-300 capitalize'>Back-end Stacks</h4>
                            <div className='backend_stacks w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                                {tech_stacks.backend ?
                                    tech_stacks?.backend?.map((stack, idx) => {
                                        return <SkillCard
                                            key={idx}
                                            width='w-28'
                                            height='h-28'
                                            isDark={isDark}
                                            imageURL={stack.icon_url}
                                            title={stack.name}
                                            altContent={stack.altText} />
                                    }) :
                                    <p>stacks are empty</p>}
                            </div>
                        </div> :
                        null
                }

                {tech_stacks.others?.length > 0
                    &&
                    <div className="space-y-4 dark:text-slate-400">
                        <h4 className='dark:text-slate-300 capitalize'>Others</h4>
                        <div className='other_stacks w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                            {
                                tech_stacks?.others?.map((stack, idx) => {
                                    return <SkillCard
                                        key={idx}
                                        isDark={isDark}
                                        width='w-28'
                                        height='h-28'
                                        imageURL={stack.icon_url}
                                        title={stack.name}
                                        altContent={stack.altText} />
                                })}
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default TechStackDisplay