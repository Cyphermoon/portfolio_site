import { Menu } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import SmallProjectCardSection from '../components/SmallProjectCardSection'



const Projects = () => {
    return (
        <div className='w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10'>
            <PageHead title='Portfolio | projects' />
            <Container className='space-y-8'>
                <Header />
                <main className='space-y-10 flex flex-col '>
                    <h1 className='px-4'>All Projects</h1>
                    <div className='dark:bg-slate-500 py-6 px-4 rounded-xl flex flex-col start space-y-12'>
                        {/* <select name="project-category" className='self-end'>
                            <option value="all" className='capitalize'>All</option>
                            <option value="all" className='capitalize'>Complex</option>
                            <option value="all" className='capitalize'>UI</option>
                        </select> */}

                        <Menu>
                            <Menu.Button></Menu.Button>
                        </Menu>

                        <SmallProjectCardSection headerTitle='best' />
                    </div>
                </main>

            </Container>
        </div>
    )
}

export default Projects