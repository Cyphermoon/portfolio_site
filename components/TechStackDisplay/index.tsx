import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { techStackDisplayType } from '../../types'
import SkillCard from '../SkillCard'

const TechStackDisplay = ({ tech_stacks }: techStackDisplayType) => {

    const t1 = useRef<GSAPTimeline>()
    const e1 = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            const stacksAnimation = {
                translateY: +100,
                opacity: 0,
                rotateY: 180,
                stagger: .5,
            }

            t1.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".tech_stacks_container",
                    start: "top bottom",
                }
            })
                .from(".frontend_stacks > *", stacksAnimation)
                .from(".backend_stacks > *", stacksAnimation, "-=1")
                .from(".other_stacks > *", stacksAnimation, "-=0.5")
        }, [e1])


        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <section ref={e1} className='bg-slate-200  dark:bg-slate-800 p-8 space-y-12'>
            <h2 className='dark:text-slate-300'>Tech Stacks</h2>
            <div className='tech_stacks_container space-y-32'>
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
                                altContent={stack.altText} />
                        })}

                    </div>
                </div>

                <div className="space-y-4 dark:text-slate-400">
                    <h4 className='dark:text-slate-300 capitalize'>Back-end Stacks</h4>
                    <div className='backend_stacks w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                        {tech_stacks.backend ?
                            tech_stacks?.backend?.map((stack, idx) => {
                                return <SkillCard
                                    key={idx}
                                    width='w-28'
                                    height='h-28'
                                    imageURL={stack.icon_url}
                                    title={stack.name}
                                    altContent={stack.altText} />
                            }) :
                            <p>stacks are empty</p>}
                    </div>
                </div>

                {tech_stacks.others
                    &&
                    <div className="space-y-4 dark:text-slate-400">
                        <h4 className='dark:text-slate-300 capitalize'>Others</h4>
                        <div className='other_stacks w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                            {
                                tech_stacks?.others?.map((stack, idx) => {
                                    return <SkillCard
                                        key={idx}
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