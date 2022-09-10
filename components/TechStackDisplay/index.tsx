import React from 'react'
import { techStackDisplayType } from '../../types'
import SkillCard from '../SkillCard'

const TechStackDisplay = ({ tech_stacks }: techStackDisplayType) => {

    return (
        <section className='bg-slate-200  dark:bg-slate-800 p-8 space-y-12'>
            <h2 className='dark:text-slate-300'>Tech Stack</h2>
            <div className='space-y-32'>
                <section className="space-y-4 dark:text-slate-400">
                    <h4 className='dark:text-slate-300'>Front end</h4>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                        {tech_stacks.frontend.map((stack, idx) => {
                            return <SkillCard
                                key={idx}
                                width='w-28'
                                height='h-28'
                                imageURL={stack.icon_url}
                                title={stack.name}
                                altContent={stack.altText} />
                        })}

                    </div>
                </section>
                <section className="space-y-4 dark:text-slate-400">
                    <h4 className='dark:text-slate-300'>Back end</h4>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                        {tech_stacks.backend.map((stack, idx) => {
                            return <SkillCard
                                key={idx}
                                width='w-28'
                                height='h-28'
                                imageURL={stack.icon_url}
                                title={stack.name}
                                altContent={stack.altText} />
                        })}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default TechStackDisplay