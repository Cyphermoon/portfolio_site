import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import AboutSection from '../components/AboutSection'
import Background from '../components/Background'
import ContactSection from '../components/ContactSection'
import Container from '../components/Container'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import ProjectDisplaySection from '../components/ProjectDisplaySection'
import SkillDisplaySection from '../components/SkillDisplaySection'
import { AboutMeQuery, BestProjectQuery, LandingPageQuery, ProgrammingLanguageQuery, SocialContactQuery } from '../sanity-queries/project.query'
import { homePageType } from '../types'
import { sanityClient } from "../utils/sanity_config"


const Home: NextPage<homePageType> = (
  { landing_section, about_data, social_medias, skill_list, projects }
) => {
  // page animation
  const [timeline,] = useState(() => gsap.timeline({
    defaults: {
      ease: "slow(0.3, 0.4, false)",
      duration: 1,
    }
  }));

  const addAnimation = useCallback((animation: GSAPTween, index: number) => {
    timeline.add(animation, index)
  }, [timeline])


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause"
    })

    const headerAnimation = gsap.to(".gsap_header", {
      translateY: 0,
      opacity: 1,
    })

    addAnimation(headerAnimation, 1.5)

    return () => {
      headerAnimation.revert()
    }
  }, [addAnimation, timeline])

  return (
    <Background addAnimation={addAnimation}>
      <PageHead title={`Kelvin's | Portfolio`} />
      <Container className='space-y-32'>
        <Header addAnimation={addAnimation} >
          <div className="gsap_header w-full md:w-9/12 text-center space-y-9 flex flex-col opacity-0 translate-y-14">
            <h1 className="normal-case text-[2.75rem] md:text-5xl dark:text-slate-300  lg:text-display_lg font-bold text-center">{landing_section.introductory_text}<span className="capitalize text-blue-500"> {landing_section.role}</span></h1>

            <p className="text-title_sm">{landing_section.elongated_text}</p>


            <div className="w-full self-center lg:w-6/12 flex flex-row sm:flex-row justify-between space-x-4">
              <Link href={landing_section?.contact_btn?.href} passHref >
                <a className="capitalize group block relative shadow-lg shadow-blue-400 dark:shadow-gray-900 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white hover:text-slate-800 dark:hover:text-slate-200 dark:text-slate-200 sm:mr-7
                ">
                  <span className='w-full block h-full absolute rounded-full bg-red-300 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />

                  <span className='block z-10 relative'>
                    {landing_section.contact_btn.display_text}
                  </span>
                </a>
              </Link>

              <Link href={landing_section?.get_resume_btn?.href} passHref>
                <a target={'_blank'} className="capitalize group block relative shadow-lg shadow-blue-400 dark:shadow-gray-900 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white hover:text-slate-800 dark:hover:text-slate-200 dark:text-slate-200 sm:mr-7">

                  <span className='w-full block h-full absolute rounded-full bg-red-300 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />

                  <span className='block z-10 relative'>
                    {landing_section.get_resume_btn.display_text}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </Header>
        <AboutSection addAnimation={addAnimation} about_data={about_data} />
        <ProjectDisplaySection addAnimation={addAnimation} projects={projects} />
        <SkillDisplaySection addAnimation={addAnimation} skill_list={skill_list} />
        <ContactSection addAnimation={addAnimation} social_medias={social_medias} />
      </Container>
    </Background>
  )
}


export async function getStaticProps() {

  try {
    var landing_section = (await sanityClient.fetch(LandingPageQuery))[0];
    var about_data = (await sanityClient.fetch(AboutMeQuery))[0]
    var social_medias = await sanityClient.fetch(SocialContactQuery)
    var skill_list = await sanityClient.fetch(ProgrammingLanguageQuery)
    var projects = await sanityClient.fetch(BestProjectQuery)
  }
  catch (err) {
    if (err instanceof Error)
      console.error(err.message)
  }


  return {
    props: {
      landing_section,
      about_data,
      social_medias,
      skill_list,
      projects
    },
    revalidate: 100
  }
}

export default Home
