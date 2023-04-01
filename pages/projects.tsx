import { Listbox, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import Container from '../components/Container'
import ListBoxItem from '../components/ListBoxItem'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import SmallProjectCardSection from '../components/SmallProjectCardSection'
import { IoIosArrowDown } from 'react-icons/io'
import { sanityClient } from '../utils/sanity_config'
import { CategoriesQuery, getCategoryProjectsQuery } from '../sanity-queries/project.query'
import { truncate } from '../utils/index.util'
import Spinner from '../components/Loaders/spinner'


interface Props {
    _categories: CategoryItemProps[]
}


const Projects = ({ _categories }: Props) => {
    const categories: CategoryItemProps[] = [
        {
            _id: "all",
            name: "All"
        },
        ..._categories
    ]

    const [selectedCategory, setSelectedCategory] = useState<CategoryItemProps>(categories[0])
    const [categoryProjects, setCategoryProjects] = useState<CategoryProjectsProps[]>([])
    const [projectsLoading, setProjectsLoading] = useState(true)

    const handleCategoryChanged = (category: CategoryItemProps) => {
        setSelectedCategory(category)

    }

    useEffect(() => {
        setProjectsLoading(true)
        sanityClient.fetch(getCategoryProjectsQuery(selectedCategory._id))
            .then((res) => setCategoryProjects(res))
            .catch((err) => console.error(err.message))
            .finally(() => setProjectsLoading(false))

    }, [selectedCategory._id])


    return (
        <div className='w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10'>
            <PageHead title='Portfolio | projects' />
            <Container className='space-y-14'>
                <Header />
                <main className='space-y-12 flex flex-col'>
                    <h1 className='bg-gradient-to-r  from-blue-600 via-blue-400 to-blue-500 bg-clip-text text-fill-color-transparent  text-6xl lg:text-8xl p-2 text-center'>{selectedCategory.name} Projects</h1>

                    <div className='dark:bg-slate-800 py-6 px-5 rounded-xl flex flex-col start space-y-12'>
                        <Listbox value={selectedCategory} onChange={handleCategoryChanged}>
                            <div className='relative w-fit self-end'>
                                <Listbox.Button
                                    className="w-32 text-slate-300 bg-blue-500 dark:bg-slate-900 rounded-lg capitalize p-2 inline-flex justify-between items-center space-x-2 text-md">
                                    <span>{truncate(selectedCategory.name, 8)}</span>
                                    <IoIosArrowDown />
                                </Listbox.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition duration-200 ease-in-out"
                                    enterFrom='opacity-0 scale-95'
                                    enterTo='opacity-100 scale-100'
                                    leave="transition duration-100 linear"
                                    leaveFrom='opacity-100 scale-100'
                                    leaveTo='opacity-0 scale-95'
                                >

                                    <Listbox.Options className={"flex flex-col space-y-2 items-start absolute mt-2 w-32 py-4 px-2 z-30 right-0 bg-blue-500 dark:bg-slate-900 rounded-md"}>

                                        {categories.map((category) => {
                                            return (
                                                <Listbox.Option key={category._id} value={category}>
                                                    {
                                                        ({ active }) => (
                                                            <ListBoxItem active={active} text={category.name} />
                                                        )
                                                    }

                                                </Listbox.Option>
                                            )
                                        })}

                                    </Listbox.Options>
                                </Transition>
                            </div>

                        </Listbox>

                        <section className="space-y-28">
                            {
                                !projectsLoading ?
                                    categoryProjects.map((category, idx, arr) => {
                                        if (arr.length === 1 && category.projects.length === 0) {
                                            return <h1 className='text-center'>This Section is empty</h1>
                                        }
                                        return (
                                            <SmallProjectCardSection
                                                key={category._id}
                                                headerTitle={category.name}
                                                projects={category.projects} />
                                        )

                                    }) :
                                    <div className="w-full grid place-items-center text-5xl">

                                        <Spinner />
                                    </div>

                            }
                        </section>
                    </div>
                </main>

            </Container>
        </div>
    )
}

export default Projects



export async function getStaticProps() {
    // make page requests
    try {
        var _categories = await sanityClient.fetch(CategoriesQuery)

    } catch (err: any) {
        console.error(err.message)
    }

    // return response data
    return {
        props: {
            _categories
        }
    }
}