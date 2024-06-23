import { gsap } from 'gsap'
import { useEffect, useMemo, useState } from 'react'
import { CiBatteryEmpty } from 'react-icons/ci'
import CategorySelector from '../components/CategorySelector'
import Container from '../components/Container'
import Header from '../components/Header'
import Spinner from '../components/Loaders/Spinner'
import PageHead from '../components/PageHead'
import SmallProjectCardSection from '../components/SmallProjectCardSection'
import { CategoriesQuery, getCategoryProjectsQuery } from '../sanity-queries/project.query'
import { sanityClient } from '../utils/sanity_config'
import { useRouter } from 'next/router'


interface Props {
    _categories: CategoryItemProps[]
}


const Projects = ({ _categories }: Props) => {
    const categories: CategoryItemProps[] = useMemo(() => [
        {
            _id: "all",
            name: "All"
        },
        ..._categories
    ], [_categories])

    const [selectedCategory, setSelectedCategory] = useState<CategoryItemProps>()
    const [categoryProjects, setCategoryProjects] = useState<CategoryProjectsProps[]>([])
    const [projectsLoading, setProjectsLoading] = useState(true)

    const router = useRouter()
    const urlCategory = router.query.category as string

    const handleCategoryChanged = (category: CategoryItemProps) => {
        setSelectedCategory(category)
    }

    useEffect(() => {
        if (!router.isReady) return

        // if no category param in the url, display all projects
        if (!urlCategory) {
            setSelectedCategory(categories[0])
            return
        }
        // try to find the url category in the categories array
        const category = categories.find(cat => cat.name.toLowerCase() === urlCategory)
        // set the category it it exists in the database
        if (category) {
            setSelectedCategory(category)
        }
        // else, display all projects
        else {
            setSelectedCategory(categories[0])
        }
    }, [urlCategory, router.isReady, categories])


    useEffect(() => {
        if (!selectedCategory?._id) return
        // set loading to true
        setProjectsLoading(true)

        // fetch projects for selected category
        sanityClient.fetch(getCategoryProjectsQuery(selectedCategory._id))
            .then((res) => setCategoryProjects(res))
            .catch((err) => console.error(err.message))
            .finally(() => setProjectsLoading(false))

    }, [selectedCategory?._id])


    useEffect(() => {
        // animate the projects when they are displayed
        if (categoryProjects.length === 0) return

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
    }, [categoryProjects.length])


    return (
        <div className='w-screen min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800: dark:text-slate-400 pb-10'>
            <PageHead title="All Kelvin's Projects" />
            <div className='space-y-14'>
                <Container>
                    <Header />
                </Container>

                <Container className='space-y-12 flex flex-col !px-0'>
                    <h1 className='bg-gradient-to-r from-slate-700 to-slate-600  dark:from-blue-600 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-fill-color-transparent  text-6xl lg:text-8xl p-2 text-center'>{selectedCategory ? selectedCategory.name + " Projects" : "..............."} </h1>

                    <div className='bg-none md:dark:bg-slate-800 md:bg-slate-200 shadow-md py-6 px-5 rounded-xl flex flex-col start space-y-12'>
                        <CategorySelector
                            selectedCategory={selectedCategory}
                            categories={categories}
                            handleCategoryChanged={handleCategoryChanged} />

                        <section className="space-y-28 pb-5 min-h-[300px]">
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
                                            if (category.projects.length === 0) return null
                                            return (
                                                <SmallProjectCardSection
                                                    key={category._id}
                                                    headerTitle={category.name}
                                                    isSingleSection={arr.length === 1}
                                                    projects={category.projects} />
                                            )

                                        }) :
                                    <div className="w-full grid place-items-center text-5xl">
                                        {/* Show spinner while loading projects */}
                                        <Spinner />
                                    </div>

                            }
                        </section>
                    </div>
                </Container>

            </div>
        </div >
    )
}

export default Projects



export async function getStaticProps() {
    // prefetch all the categories in sanity
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