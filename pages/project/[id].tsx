import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'
import Background from '../../components/Background'
import Carousel from '../../components/Carousel'
import Container from '../../components/Container'
import FeatureContent, { FeatureContentImage } from '../../components/FeatureContent'
import Header from '../../components/Header'
import OtherProjectDisplay from '../../components/OtherProjectDisplay'
import PageHead from '../../components/PageHead'
import TechStackDisplay from '../../components/TechStackDisplay'
import { otherProjectsQuery } from '../../sanity-queries/project.query'
import { projectPageType } from '../../types'
import { sanityClient } from '../../utils/sanity_config'

interface ParamProps extends ParsedUrlQuery {
    id: string
}

const Project = ({ project, otherProjects }: projectPageType) => {
    const carouselItems: {
        imageURL: string
    }[] = project.slideshow_images


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause"
        })

    }, [])

    return (
        <Background>
            <PageHead title={`${project.title} - Kelvin's Portfolio Project `} />
            <Container className="space-y-32">
                <Header >
                    <div className='flex flex-col items-center justify-center space-y-12 w-full'>
                        <div className="project_description w-full md:w-11/12 items-center text-center space-y-6 flex flex-col">
                            <h1 className="text-[2rem] capitalize lg:text-display_lg font-bold text-center dark:text-slate-300">
                                {project.title}
                            </h1>

                            <p className="text-title_sm normal-case dark:text-slate-400">{project.description}</p>

                            <Link href={project?.link?.href} passHref >
                                <a
                                    className={`${project?.status === "not deployed" && "pointer-events-none opacity-75"} shadow-lg capitalize relative group shadow-blue-400 dark:shadow-slate-800 w-full max-w-sm bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white dark:text-slate-200`}>

                                    <span className='w-full block h-full absolute rounded-full bg-red-300 top-0 left-0 scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                                    transition-all duration-150 ease-linear z-0' />

                                    <span className='block z-10 relative'>{project.link.display_text}</span>
                                </a>
                            </Link>
                        </div>

                        <figure className='w-full h-[379px] md:h-[500px] lg:h-[800px] bg-slate-100 dark:bg-slate-900 round-md'>
                            <Carousel carouselItems={carouselItems} />
                        </figure>
                    </div>

                </Header>

                <TechStackDisplay tech_stacks={project.tech_stack} />

                <div className="space-y-40 lg:space-y-56 container px-4 md:px-2 lg:px-0">
                    {
                        project.functionality?.length > 0 ?
                            project.functionality.map((data, idx) => {
                                const isEven = (idx + 1) % 2 === 0

                                return (
                                    <FeatureContent key={idx} reversed={isEven} >
                                        <div className='space-y-4 lg:w-2/5'>
                                            <h2 className='dark:text-slate-300 capitalize'>{data.header}</h2>
                                            <p className='dark:text-slate-400 normal-case'>
                                                {data.description}
                                            </p>
                                        </div>

                                        <FeatureContentImage imageURL={data.image_url} altContent={data.altText} />
                                    </FeatureContent>
                                )
                            }) :
                            null}

                    <OtherProjectDisplay other_projects={otherProjects} />
                </div>
            </Container>
        </Background>
    )
}

export async function getStaticProps({ params }: GetStaticPropsContext<ParamProps>) {
    const project = await sanityClient.fetch(`
    *[_type=='project' && _id=='${params?.id}']
    {description,  title, link,
        "slideshow_images":slideshow_images[]->{"imageURL":image.asset->url}, 
        "status":status,
        "tech_stack":{
          "backend":tech_stack.backend[]->{"name":name, "icon_url":icon->image.asset->url, "altText":icon->alt_text},
           "frontend":tech_stack.frontend[]->{"name":name, "icon_url":icon->image.asset->url, "altText":icon->alt_text},
          "others":tech_stack.others[]->{"name":name, "icon_url":icon->image.asset->url, "altText":icon->alt_text}
           } ,
        "functionality":functionalities[]{"description":description, "header":header, "image_url":image->image.asset->url, "altText":image->alt_text}
        }`)

    const otherProjects = await sanityClient.fetch(otherProjectsQuery(params?.id ?? ""))

    return {
        props: {
            project: project[0],
            otherProjects: otherProjects
        },

        revalidate: 100,
    }
}

export async function getStaticPaths() {
    // Call an external API endpoint to get projects
    const res: { _id: string }[] = await sanityClient.fetch("*[_type=='project']{_id}")

    // Get the paths we want to pre-render based on projects
    const paths = res.map((project) => ({
        params: { id: project._id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default Project