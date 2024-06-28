import gsap from 'gsap';
import React, { useEffect } from 'react'
import SchoolCard, { SchoolCardProps } from './components/SchoolCard';

interface Props {
    history: SchoolCardProps[]
}

const SchoolHistorySection = ({ history }: Props) => {

    useEffect(() => {
        const schoolHistoryAnimation = gsap.from(".stack_animation", {
            scrollTrigger: {
                trigger: ".school_card_list",
                scrub: true,
                toggleActions: "restart pause resume pause",
                pin: true,
            },
            // stagger: 8,
            translateY: +300,
            duration: 4,
        })


        return () => {
            schoolHistoryAnimation.revert()
        }
    }, [])


    return (
        <section id='school_history' className='space-y-6'>
            <h2 className='dark:text-slate-300'>School History</h2>
            <div className='school_card_list flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-start justify-between'>
                {history.map((school, idx) => {
                    return <SchoolCard
                        key={school.slug}
                        idx={idx}
                        schoolName={school.schoolName}
                        grade={school.grade}
                        courseName={school.courseName}
                        startDate={new Date(school.startDate)}
                        endDate={new Date(school.endDate)}
                        schoolLogo={school.schoolLogo}
                        abbr={school.abbr}
                        slug={school.slug}
                        certificate={school.certificate}
                        location={school.location}
                    />
                })}
            </div>
        </section>
    )
}

export default SchoolHistorySection