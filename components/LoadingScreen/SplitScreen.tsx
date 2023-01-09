import React from 'react'
import { splitScreenPropType } from './type'

const SplitScreen = ({ animationType }: splitScreenPropType) => {
    return (
        <div data-animation={`${animationType}`} className='h-screen w-1/2 bg-slate-100 dark:bg-slate-900'></div>
    )
}

export default SplitScreen