import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
import { skillDisplaySectionType } from '../../types'
import SkillCard from '../SkillCard'

const SkillDisplaySection = ({ skill_list, addAnimation }: skillDisplaySectionType) => {



  useEffect(() => {
    const skillDisplayAnimation = gsap.from(".skill_display > div > *", {
      scrollTrigger: {
        trigger: ".skill_display"
      },
      translateY: +30,
      opacity: 0,
      stagger: .2
    })

    return () => {
      skillDisplayAnimation.revert()
    }
  }, [addAnimation])

  return (
    <section className='skill_display space-y-8'>
      <h2 className='dark:text-slate-300'>Skills</h2>
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