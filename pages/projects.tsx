import { gsap } from 'gsap'
import { useEffect, useState } from 'react'
import { CiBatteryEmpty } from 'react-icons/ci'
import CategorySelector from '../components/CategorySelector'
import Container from '../components/Container'
import Header from '../components/Header'
import Spinner from '../components/Loaders/Spinner'
import PageHead from '../components/PageHead'
import SmallProjectCardSection from '../components/SmallProjectCardSection'
import { CategoriesQuery, getCategoryProjectsQuery } from '../sanity-queries/project.query'
import { sanityClient } from '../utils/sanity_config'


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


    useEffect(() => {
        const otherProjectsDisplayAnimation = gsap.from("[data-animate='shuffle-in'] > * ", {
            translateX: -200,
            duration: 1,
            scale: .75,
            opacity: 0,
            stagger: .5,
        })


        return () => {
            otherProjectsDisplayAnimation.revert()
        }
    })


    return (
        <div className='w-screen min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10'>
            <PageHead title='Portfolio | projects' />
            <Container className='space-y-14'>
                <Header />
                <main className='space-y-12 flex flex-col'>
                    <h1 className='bg-gradient-to-r from-slate-700 to-slate-600  dark:from-blue-600 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-fill-color-transparent  text-6xl lg:text-8xl p-2 text-center'>{selectedCategory.name} Projects</h1>

                    <div className='dark:bg-slate-800 bg-slate-200 shadow-md py-6 px-5 rounded-xl flex flex-col start space-y-12'>
                        <CategorySelector
                            selectedCategory={selectedCategory}
                            categories={categories}
                            value={selectedCategory}
                            handleCategoryChanged={handleCategoryChanged} />

                        <section className="space-y-28 min-h-[300px]">
                            {
                                !projectsLoading ?
                                    categoryProjects
                                        .sort((a, b) => {
                                            if (a.name.toLowerCase() === "best") return -1;
                                            if (b.name.toLowerCase() === "best") return 1;
                                            if (a.name.toLowerCase() === "other") return 1;
                                            if (b.name.toLowerCase() === "other") return -1;
                                            return a.projects.length > b.projects.length ? -1 : 1;
                                        })
                                        .map((category, _, arr) => {
                                            if (arr.length === 1 && category.projects.length === 0) {
                                                return (
                                                    <div className='w-full h-full grid place-items-center animate-fadeIn dark:text-slate-500 text-slate-700'>
                                                        <CiBatteryEmpty className='text-[10rem] ' />
                                                        <h1 className='text-center text-xl lg:text-4xl '>This category is empty</h1>
                                                    </div>
                                                )
                                            }
                                            return (
                                                <SmallProjectCardSection
                                                    key={category._id}
                                                    headerTitle={category.name}
                                                    isSingleSection={arr.length === 1}
                                                    projects={category.projects} />
                                            )

                                        }) :
                                    <div className="w-full grid place-items-center text-5xl">
                                        <Spinner />
                                    </div>

                            }
                        </section>
                    </div>
                </main >

            </Container >
        </div >
    )
}

export default Projects



export async function getStaticProps() {
    // make page requests
    try {
        var _categories = await sanityClient.fetch(CategoriesQuery)
        _categories = _categories.sort((a: CategoryItemProps, b: CategoryItemProps) => a.name.localeCompare(b.name))

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