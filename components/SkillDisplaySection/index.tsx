import React from 'react'
import SkillCard from '../SkillCard'

const SkillDisplaySection = () => {
  return (
    <section className='space-y-8'>
      <h2>Skills</h2>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>

        <SkillCard imageURL='/icons/tailwind_css__logo.svg' title='tailwind CSS' altContent="Tailwind Css logo" />

        <SkillCard imageURL='/icons/typescript__logo.svg' title='typescript' altContent="Typescript logo" />

        <SkillCard imageURL='/icons/react__logo.svg' title='react.js' altContent="React logo" />

        <SkillCard imageURL='/icons/next__logo.svg' title="next.js" altContent="Next.js logo" />

        <SkillCard imageURL='/icons/javascript__logo.svg' title='Javascript' altContent="Javascript logo" />


        <SkillCard imageURL='/icons/css__logo.svg' title='css' altContent="cascading stylesheet CSS logo" />

        <SkillCard imageURL='/icons/html__logo.svg' title='html' altContent="HTML  logo" />
      </div>

    </section>
  )
}

export default SkillDisplaySection