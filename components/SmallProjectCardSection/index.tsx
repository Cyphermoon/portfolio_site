import React from 'react'
import { projectDisplayType } from '../../types'
import SmallProjectCard from '../SmallProjectCard'

interface Props {
    headerTitle: string,
    projects?: projectDisplayType
}

const SmallProjectCardSection = ({ headerTitle, projects }: Props) => {
    const dummyArray: any[] = [...Array(10)]
    return (
        <div className='space-y-3'>
            <h4 className='font-medium text-4xl capitalize dark:text-slate-300 text-slate-800'>{headerTitle}</h4>
            <div className='grid gap-4 grid-cols-dynamic'>
                {dummyArray.map((project, idx) => {

                    return (
                        <SmallProjectCard
                            key={idx}
                            projectId={12345}
                            title='Project Title'
                            imageURL='https://via.placeholder.com/200x60'
                            description='Project description can be an extremely long text'
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SmallProjectCardSection