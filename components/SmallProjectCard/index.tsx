import Image from "next/image"
import Link from "next/link"
import { projectCardType } from "../../types"
import { truncate } from "../../utils/index.util"


const SmallProjectCard = ({ imageURL, description, title, projectId }: projectCardType) => {
    return (

        <Link href={`/project/${encodeURIComponent(projectId)}`} >
            <div className='
                py-3 relative cursor-pointer bg-red-400 h-[200px] rounded-2xl before-h-full 
                before:transition-opacity before:duration-100ms before:w-full before:rounded-2xl
                before:inset-0 before:z-10 before:absolute before:bg-slate-900 before:opacity-60 dark:before:opacity-60
                md:dark:before:opacity-80 dark:bg-slate-800
                before:hover:opacity-80 dark:before:hover:opacity-30 group'
            >
                <Image src={imageURL} alt={title} layout='fill' objectFit='cover' className="rounded-2xl" />

                <div className="absolute top-3 left-3 z-10 transition-opacity duration-500 text-gray-100 dark:text-slate-400 dark:group-hover:opacity-0">
                    <h3 className='capitalize'>{title}</h3>
                    <p className='text-label_md normal-case'>{truncate(description, 120)}</p>
                </div>
            </div>
        </Link>

    )
}

export default SmallProjectCard