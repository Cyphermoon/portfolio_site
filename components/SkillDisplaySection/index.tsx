import React from 'react'
import { skillDisplaySectionType } from '../../types'
import SkillCard from '../SkillCard'

const SkillDisplaySection = ({ skill_list }: skillDisplaySectionType) => {

  console.log(skill_list)

  return (
    <section className='space-y-8'>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9'>
        {skill_list.map((skill, idx) => {
          return <SkillCard
            key={idx}
            imageURL={skill.url}
            title={skill.name}
            altContent={skill.altText} />
        })}

      </div>

    </section>
  )
}

export default SkillDisplaySection