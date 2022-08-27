import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection'
import Container from '../components/Container'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import ProjectDisplaySection from '../components/ProjectDisplaySection'

const Home: NextPage = () => {
  return (
    <div className=' bg-slate-100 text-gray-800'>
      <PageHead title='Portfolio' />
      <Container>
        <Header >
          <div className="w-full md:w-9/12 text-center space-y-9 flex flex-col">
            <h1 className="text-5xl  lg:text-display_lg font-bold text-center">My name is kelvin, i am a<span className="text-blue-500"> frontend developer</span></h1>

            <p className="text-title_sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam enim non consequuntur! Unde nulla totam in </p>


            <div className="w-full self-center lg:w-6/12 flex flex-row sm:flex-row justify-between space-x-4">
              <button className="shadow-lg shadow-blue-400 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white sm:mr-7">Contact me</button>

              <button className="shadow-lg shadow-blue-400 w-full md:w-3/4 bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white">Get Resume</button>
            </div>
          </div>
        </Header>

        <AboutSection />

        <ProjectDisplaySection />
      </Container>
    </div>
  )
}

export default Home
