import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import Container from '../components/Container'
import DropDowItem from '../components/DropDownItem'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import SmallProjectCardSection from '../components/SmallProjectCardSection'
import { IoIosArrowDown } from 'react-icons/io'




const Projects = () => {
    return (
        <div className='w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10'>
            <PageHead title='Portfolio | projects' />
            <Container className='space-y-14'>
                <Header />
                <main className='space-y-12 flex flex-col'>
                    <h1 className='bg-gradient-to-r  from-blue-600 via-blue-400 to-blue-500 bg-clip-text text-fill-color-transparent  text-6xl lg:text-8xl p-2 text-center'>All Projects</h1>

                    <div className='dark:bg-slate-800 py-6 px-5 rounded-xl flex flex-col start space-y-12'>
                        <Menu as={"div"} className="self-end w-max relative">
                            <Menu.Button
                                className="w-full text-slate-300 bg-blue-500 dark:bg-slate-900 rounded-lg capitalize p-2 inline-flex justify-between items-center space-x-2 text-md">
                                <span>category</span>
                                <IoIosArrowDown />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition duration-200 ease-in-out"
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave="transition duration-100 linear"
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >

                                <Menu.Items className={"flex flex-col space-y-2 items-start absolute mt-2 w-32 py-4 px-2 z-30 right-0 bg-blue-500 dark:bg-slate-900 rounded-md"}>
                                    <Menu.Item>
                                        {
                                            ({ active }) => (
                                                <DropDowItem active={active} text="All" />
                                            )
                                        }

                                    </Menu.Item>
                                    <Menu.Item>
                                        {
                                            ({ active }) => (
                                                <DropDowItem active={active} text="UI" />
                                            )
                                        }

                                    </Menu.Item>
                                    <Menu.Item>
                                        {
                                            ({ active }) => (
                                                <DropDowItem active={active} text="Advanced" />
                                            )
                                        }
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>

                        </Menu>

                        <section className="space-y-28">
                            <SmallProjectCardSection headerTitle='best' />
                            <SmallProjectCardSection headerTitle='UI' />
                            <SmallProjectCardSection headerTitle='Mobile' />
                        </section>
                    </div>
                </main>

            </Container>
        </div>
    )
}

export default Projects