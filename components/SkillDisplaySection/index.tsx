import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import { TECH_STACK } from '../../constants'
import { skillDisplaySectionType, skillDisplayType } from '../../types'
import SkillCard from '../SkillCard'

interface SkillCategorySectionProps {
  skill_list: skillDisplayType
  title: string
  className?: string

}

const SkillDisplaySection = ({ skill_list, addAnimation }: skillDisplaySectionType) => {

  // Organize the skill list into different categories
  const webStacks = skill_list.filter(skill => skill.category === TECH_STACK.web)
  const backendStacks = skill_list.filter(skill => skill.category === TECH_STACK.backend)
  const mobileStacks = skill_list.filter(skill => skill.category === TECH_STACK.mobile)
  const toolsStacks = skill_list.filter(skill => skill.category === TECH_STACK.tools)
  const languagesStacks = skill_list.filter(skill => skill.category === TECH_STACK.languages)



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
    <section id='skills_section' className='skill_display space-y-8'>
      <h2 className='dark:text-slate-300'>Skills</h2>
      <div className='w-full flex flex-col lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-4 dark:bg-slate-800 bg-slate-200 lg:bg-transparent lg:dark:bg-transparent shadow-md md:shadow-none py-6 px-5 md:px-0 rounded-xl '>
        <SkillCategorySection skill_list={webStacks} title='Web' className='col-span-9' />
        <SkillCategorySection skill_list={mobileStacks} title='Mobile' className='col-span-3' />
        <SkillCategorySection skill_list={languagesStacks} title='Languages' className='col-span-5' />
        <SkillCategorySection skill_list={backendStacks} title='Backend' className='col-span-3' />
        <SkillCategorySection skill_list={toolsStacks} title='Tools' className='col-span-4' />
      </div>

    </section>
  )
}

export default SkillDisplaySection


const SkillCategorySection = ({ skill_list, title, className }: SkillCategorySectionProps) => {
  return (
    <div className={`bg-transparent lg:dark:bg-slate-800 lg:bg-slate-200 rounded-xl ${className} px-4 py-5 md:shadow-md md:dark:shadow-slate-800`}>
      <h3 className='dark:text-slate-300 mb-4'>{title}</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-start gap-9 py-3 flex-wrap md:flex-nowrap'>
        {skill_list.map((skill, idx) => {
          return <SkillCard
            key={idx}
            imageURL={skill.url}
            title={skill.name}
            altContent={skill.altText} />
        })}
      </div>

    </div>
  )
}