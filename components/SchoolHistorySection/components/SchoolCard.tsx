import Image from "next/image"
import Link from "next/link"
import { formateDate } from "../../../utils/index.util"

export interface SchoolCardProps {
    grade: number
    schoolLogo: {
        url: string
        alt: string
    },
    schoolName: string
    courseName: string
    startDate: Date
    endDate: Date
    slug: string
    abbr: string
    certificate: string
    idx: number
}

const SchoolCard = ({ grade, schoolLogo, schoolName, courseName, startDate, endDate, abbr, slug, certificate, idx }: SchoolCardProps) => {
    return (
        <div className={`${idx > 0 ? "stack_animation" : ""} w-full lg:w-1/2 relative rounded-xl bg-slate-200 dark:bg-slate-800 p-3 space-y-2 min-h-[400px] flex flex-col justify-between`}>
            <span className="absolute top-3 right-3 inline-block px-3 py-0.5 rounded-lg bg-slate-300 dark:bg-slate-700 text-sm">
                {slug.toLowerCase() === "usw" ? "TBD" : grade.toFixed(2) + " · GPA"}
            </span>

            {/* School Logo */}
            <figure className="mb-4">
                <Image src={schoolLogo.url} alt={schoolLogo.alt} width={100} height={100} />
                <h3>{schoolName} ({abbr.toUpperCase()})</h3>
            </figure>

            {/* Course Information */}
            <div className="space-y-1 grow flex flex-col">
                <div>
                    <h5 className="font-bold">Course Name</h5>
                    <p className="text-sm font-sans">{courseName}</p>
                </div>

                <div>
                    <h5 className="font-bold">Duration</h5>
                    <p className="text-sm font-sans">
                        <span>{formateDate(startDate)}</span> - <span>{formateDate(endDate)}</span>
                    </p>
                </div>
                <div>
                    <h5 className="font-bold">Degree</h5>
                    <p className="text-sm font-sans">
                        {certificate}
                    </p>
                </div>
            </div>

            {/*CTA to view projects. This is a temporary fix, it would be better to filter based on props on the school_history object*/}
            {
                slug.toLowerCase() === "usw" &&

                <Link href={`/projects?category=${slug}`} passHref>
                    <a className="block w-full text-center py-5 rounded-xl shadow-md shadow-slate-300 dark:shadow-slate-900 duration-200 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700" >
                        View Projects
                    </a>
                </Link>
            }
        </div>
    )
}

export default SchoolCard