import React from 'react'
import SkillCard from '../SkillCard'

const TechStackDisplay = () => {
    return (
        <section className='bg-slate-200 p-8 space-y-12'>
            <h2>Tech Stack</h2>
            <div className='space-y-32'>
                <section className="space-y-4">
                    <h4>Front end</h4>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                        <SkillCard width='w-28' height='h-28' imageURL='/icons/tailwind_css__logo.svg' title='tailwind CSS' altContent="Tailwind Css logo" />

                        <SkillCard width='w-28' height='h-28' imageURL='/icons/typescript__logo.svg' title='typescript' altContent="Typescript logo" />

                        <SkillCard width='w-28' height='h-28' imageURL='/icons/react__logo.svg' title='react.js' altContent="React logo" />

                        <SkillCard width='w-28' height='h-28' imageURL='/icons/next__logo.svg' title="next.js" altContent="Next.js logo" />

                        <SkillCard width='w-28' height='h-28' imageURL='/icons/javascript__logo.svg' title='Javascript' altContent="Javascript logo" />


                        <SkillCard width='w-28' height='h-28' imageURL='/icons/css__logo.svg' title='css' altContent="cascading stylesheet CSS logo" />

                        <SkillCard width='w-28' height='h-28' imageURL='/icons/html__logo.svg' title='html' altContent="HTML  logo" />
                    </div>
                </section>
                <section className="space-y-4">
                    <h4>Back end</h4>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
                        <SkillCard width='w-28' height='h-28' imageURL='/icons/tailwind_css__logo.svg' title='tailwind CSS' altContent="Tailwind Css logo" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default TechStackDisplay