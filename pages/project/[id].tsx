import { GetStaticPropsContext } from 'next'
import { sanityClient } from '..'
import Carousel from '../../components/Carousel'
import FeatureContent, { FeatureContentImage } from '../../components/FeatureContent'
import Header from '../../components/Header'
import OtherProjectDisplay from '../../components/OtherProjectDisplay'
import PageHead from '../../components/PageHead'
import TechStackDisplay from '../../components/TechStackDisplay'

const Project = ({ project }: any) => {

    const carouselItems: {
        imageURL: string
    }[] = project.slideshow_images

    console.dir(project.functionality)


    return (
        <div className='w-screen overflow-hidden bg-slate-100 text-gray-800 pb-10'>
            <PageHead title='Portfolio' />
            <div className="space-y-32 container px-2 md:px-2 lg:px-0">
                <Header >
                    <div className='flex flex-col items-center justify-center space-y-12'>
                        <div className="w-full md:w-9/12 items-center text-center space-y-6 flex flex-col">
                            <h1 className="text-[2.5rem] lg:text-display_lg font-bold text-center">
                                {project.title}
                            </h1>

                            <p className="text-title_sm">{project.description}</p>

                            <button className="shadow-lg shadow-blue-400 w-full max-w-sm bg-blue-500 rounded-full px-10 sm:px-14 py-4 text-base text-white">view site</button>
                        </div>
                        <figure className='min-w-full shadow-2xl shadow-gray-600 w-72 md:w-[400px] lg:w-full max-w-7xl h-[379px] md:h-450px lg:h-[750px] min-h-min bg-slate-200 round-md'>
                            <Carousel carouselItems={carouselItems} />
                        </figure>
                    </div>

                </Header>

                <TechStackDisplay tech_stacks={project.tech_stack} />


                <div className="space-y-40 lg:space-y-56 container px-4 md:px-2 lg:px-0">
                    {project.functionality.map((data, idx) => {
                        return <FeatureContent key={idx} reversed={idx / 2 !== 0} >
                            <div className='space-y-4 lg:w-2/5'>
                                <h2>{data.header}</h2>
                                <p>
                                    {data.description}
                                </p>
                            </div>

                            <FeatureContentImage imageURL={data.image_url} altContent={data.altText} />
                        </FeatureContent>
                    })}

                    <OtherProjectDisplay />
                </div>
            </div>

        </div>
    )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const project = await sanityClient.fetch(`
    *[_type=='project' && _id=='243f37cf-25ba-4570-be67-441b2bd9862f']
    {description,  title,
     "slideshow_images":slideshow_images[]->{"imageURL":image.asset->url}, 
     "tech_stack":{
       "backend":tech_stack.backend[]->{"name":name, "icon_url":icon->image.asset->url, "altText":icon->alt_text},
        "frontend":tech_stack.frontend[]->{"name":name, "icon_url":icon->image.asset->url, "altText":icon->alt_text},
        } ,
     "functionality":functionalities[]{"description":description, "header":header, "image_url":image->image.asset->url, "altText":image->alt_text}
     }`)

    return {
        props: {
            project: project[0]
        }
    }
}


export async function getStaticPaths() {
    // Call an external API endpoint to get projects
    const res: { _id: string }[] = await sanityClient.fetch("*[_type=='project']{_id}")

    // Get the paths we want to pre-render based on posts
    const paths = res.map((project) => ({
        params: { id: project._id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default Project