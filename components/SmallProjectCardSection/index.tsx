import { projectDisplayType } from '../../types'
import SmallProjectCard from '../SmallProjectCard'

interface Props {
    headerTitle: string,
    projects: projectDisplayType,
    isSingleSection: boolean
}

const shouldHeaderDisplay = (isSingleSection: boolean, containsZeroProjects: boolean) => {
    if (isSingleSection || containsZeroProjects) {
        return false
    }
    return true
}

const SmallProjectCardSection = ({ headerTitle, projects, isSingleSection }: Props) => {
    const isHeaderDisplay = shouldHeaderDisplay(isSingleSection, projects.length <= 0)

    return (
        <div className='space-y-8' >
            {isHeaderDisplay ?
                <h4 className='font-black text-4xl md:text-5xl capitalize dark:text-slate-400 text-slate-700 animate-fadeIn'>{headerTitle}</h4> :
                null
            }
            <div className='grid gap-4 grid-cols-dynamic' data-animate="shuffle-in" >
                {projects.map((project, idx) => {
                    return (
                        <SmallProjectCard
                            key={idx}
                            projectId={project._id}
                            title={project.title}
                            imageURL={project.cover_image}
                            description={project.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SmallProjectCardSection