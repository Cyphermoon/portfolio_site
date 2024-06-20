import React from 'react'
import SchoolCard, { SchoolCardProps } from './components/SchoolCard';

interface Props {
    history: SchoolCardProps[]
}

const SchoolHistorySection = ({ history }: Props) => {


    return (
        <section>
            <h2 className='dark:text-slate-300 mb-8'>School History</h2>
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 items-start justify-between'>
                {history.map((school) => {
                    return <SchoolCard
                        key={school.schoolName}
                        schoolName={school.schoolName}
                        grade={school.grade}
                        courseName={school.courseName}
                        startDate={new Date(school.startDate)}
                        endDate={new Date(school.endDate)}
                        schoolLogo={school.schoolLogo}
                        abbr={school.abbr}
                        slug={school.slug}
                        certificate={school.certificate}
                    />
                })}
            </div>
        </section>
    )
}

export default SchoolHistorySection