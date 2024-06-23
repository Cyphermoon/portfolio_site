import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import AboutSection from '../components/AboutSection'
import Background from '../components/Background'
import ContactSection from '../components/ContactSection'
import Container from '../components/Container'
import Header from '../components/Header'
import LoadingScreen from '../components/LoadingScreen'
import PageHead from '../components/PageHead'
import ProjectDisplaySection from '../components/ProjectDisplaySection'
import SkillDisplaySection from '../components/SkillDisplaySection'
import { useLoaderAnimation } from '../context/LoaderAnimationContext'
import { AboutMeQuery, BestProjectQuery, LandingPageQuery, ProgrammingLanguageQuery, SchoolHistoryQuery, SocialContactQuery } from '../sanity-queries/project.query'
import { homePageType } from '../types'
import { sanityClient } from "../utils/sanity_config"
import { isDevMode } from '../utils/index.util'
import SchoolHistorySection from '../components/SchoolHistorySection'

// Registering the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

// Setting default properties for ScrollTrigger
ScrollTrigger.defaults({
  toggleActions: "play pause resume none"
})


const Home: NextPage<homePageType> = (
  { landing_section, about_data, social_medias, skill_list, projects, school_history }
) => {
  // page animation
  const [timeline,] = useState(() => gsap.timeline({
    defaults: {
      ease: "slow(0.3, 0.4, false)",
      duration: 1,
    }
  }));

  const addAnimation = useCallback((animation: GSAPTween, index: number | string) => {
    timeline.add(animation, index)
  }, [timeline])

  const { animationLoading, setAnimationLoading } = useLoaderAnimation()

  useEffect(() => {

    // Create animation to reveal the container
    // Creating an animation for the container with id 'reveal_container'
    // It sets the initial opacity to 0 and gradually increases it to 1
    const revealAnimation = gsap.to("#reveal_container", {
      autoAlpha: 1,
      ease: "linear",
    })

    // Adding the created animation to the timeline at the beginning (index 0)
    addAnimation(revealAnimation, 0)

    // Create animation to remove the visibility of the container

    // Creating an animation for the header
    // The animation targets the element with class 'gsap_header'
    // It translates the element 10% upwards, over a duration of 1.5 seconds, and sets its initial opacity to 0
    const headerAnimation = gsap.from(".gsap_header", {
      translateY: "-10%",
      duration: 1.5,
      opacity: 0,
    })

    // Adding the created animation to a queue with a delay of 1.5 seconds
    addAnimation(headerAnimation, animationLoading ? 1.5 : .3)

    // Returning a cleanup function that will be called when the component unmounts
    // This function reverts the animation to its original state
    return () => {
      headerAnimation.revert()
      revealAnimation.revert()
    }
  }, [addAnimation, animationLoading, timeline]) // The effect depends on the 'addAnimation' function and 'timeline' variable

  return (
    <Background addAnimation={addAnimation} showInteractions>
      <PageHead title={`Kelvin's Portfolio`} />
      {!isDevMode && animationLoading && <LoadingScreen setLoading={setAnimationLoading} />}

      <Container id='reveal_container' className='space-y-32 visible'>
        <Header addAnimation={addAnimation}  >
          <div className="gsap_header w-full md:w-9/12 text-center space-y-9 flex flex-col opacity-100">
            <h1 className="normal-case text-[2.75rem] md:text-5xl dark:text-slate-300  lg:text-display_lg font-bold text-center">{landing_section.introductory_text}<span className="capitalize text-blue-500"> {landing_section.role}</span></h1>

            <p className="text-title_sm">{landing_section.elongated_text}</p>


            <div className="w-full self-center lg:w-6/12 flex flex-col sm:flex-row-reverse justify-between sm:space-x-4 space-y-4 sm:space-y-0">

              <Link href={landing_section?.get_resume_btn?.href} passHref >
                <a target={'_blank'} className="capitalize group block relative shadow-lg shadow-blue-400 dark:shadow-gray-900 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white hover:text-slate-200 dark:text-slate-200 sm:ml-5
                ">
                  <span className='w-full block h-full absolute rounded-full bg-red-300 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />

                  <span className='block z-10 relative'>
                    {landing_section.get_resume_btn.display_text}
                  </span>
                </a>
              </Link>

              <Link href={landing_section?.contact_btn?.href} passHref>
                <a className="capitalize group block relative dark:shadow-lg  dark:shadow-gray-900 w-full md:w-3/4 bg-transparent border-2 border-blue-400 rounded-full px-10 sm:px-14 py-4 text-base text-blue-500 dark:text-slate-200 hover:text-slate-200">

                  <span className='w-full block h-full absolute rounded-full bg-blue-400 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />

                  <span className='block z-10 relative'>
                    {landing_section.contact_btn.display_text}

                  </span>
                </a>
              </Link>
            </div>
          </div>
        </Header>
        <SkillDisplaySection addAnimation={addAnimation} skill_list={skill_list} />
        <SchoolHistorySection history={school_history} />
        <AboutSection addAnimation={addAnimation} about_data={about_data} />
        <ProjectDisplaySection addAnimation={addAnimation} projects={projects} />
        <ContactSection addAnimation={addAnimation} social_medias={social_medias} />
      </Container>
    </Background>
  )
}


export async function getStaticProps() {

  try {
    // pre fetch data required in each section of portfolio
    let landing_section = (await sanityClient.fetch(LandingPageQuery))[0];
    let about_data = (await sanityClient.fetch(AboutMeQuery))[0]
    let social_medias = await sanityClient.fetch(SocialContactQuery)
    let skill_list = await sanityClient.fetch(ProgrammingLanguageQuery)
    let projects = await sanityClient.fetch(BestProjectQuery)
    let school_history = await sanityClient.fetch(SchoolHistoryQuery)

    // This `prop` key is the fetched data and will be passed to the `Home` component
    return {
      props: {
        landing_section,
        about_data,
        social_medias,
        skill_list,
        projects,
        school_history
      },
      revalidate: 100
    }
  }
  catch (err) {
    // handle any error that occurs while fetching the data
    if (err instanceof Error) {
      console.error(err.message)
      throw new Error("An Error occured While fetching the data. Please try again later")
    }

    return null
  }
}

export default Home
