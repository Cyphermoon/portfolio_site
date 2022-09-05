import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Container from '../components/Container'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import ProjectDisplaySection from '../components/ProjectDisplaySection'
import SkillDisplaySection from '../components/SkillDisplaySection'
import { createClient } from "next-sanity"
import query from "../queries.json"
import Link from 'next/link'

const Home: NextPage = (
  { landing_section, about_data, social_medias, skill_list, projects }: any
) => {

  return (
    <div className='w-screen overflow-hidden bg-slate-100 text-gray-800 pb-10'>
      <PageHead title='Portfolio' />
      <Container>
        <Header >
          <div className="w-full md:w-9/12 text-center space-y-9 flex flex-col">
            <h1 className="text-[2.75rem] md:text-5xl  lg:text-display_lg font-bold text-center">{landing_section.introductory_text}<span className="text-blue-500"> {landing_section.role}</span></h1>

            <p className="text-title_sm">{landing_section.elongated_text}</p>


            <div className="w-full self-center lg:w-6/12 flex flex-row sm:flex-row justify-between space-x-4">
              <Link href={landing_section?.contact_btn?.href} passHref >
                <a className="block shadow-lg shadow-blue-400 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white sm:mr-7">{landing_section.contact_btn.display_text}</a>
              </Link>

              <Link href={landing_section?.get_resume_btn?.href} passHref>
                <a className="shadow-lg shadow-blue-400 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white">
                  {landing_section.get_resume_btn.display_text}
                </a>
              </Link>
            </div>
          </div>
        </Header>

        <AboutSection about_data={about_data} />
        <ProjectDisplaySection projects={projects} />
        <SkillDisplaySection skill_list={skill_list} />
        <ContactSection social_medias={social_medias} />
      </Container>
    </div>
  )
}


const client = createClient({
  projectId: process.env['NEXT_PUBLIC_SANITY_PROJECT_KEY'] ?? "",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-10-05",
})

export async function getStaticProps() {

  let landing_section = (await client.fetch(query.landing_page_query))[0];
  let about_data = (await client.fetch(query.about_me_query))[0]
  let social_medias = await client.fetch(query.social_contact_query)
  let skill_list = await client.fetch(query.programming_language_query)
  let projects: [] = []

  return {
    props: {
      landing_section,
      about_data,
      social_medias,
      skill_list,
      projects
    }
  }
}

export default Home
