import Image from 'next/image'
import React from 'react'
import { useTiltEffect } from '../../hooks/index.util'
import { featureContentImageType, featureContentType } from '../../types'

export const FeatureContentImage = ({ imageURL, altContent }: featureContentImageType) => {
  const { tiltCard, removeTiltEffect } = useTiltEffect()
  return (
    <figure
      className='relative w-full lg:w-5/12 h-[365px] bg-slate-600 dark:bg-slate-700'
      style={{ transform: "perspective(1000px)" }}
      onMouseMove={tiltCard} onMouseLeave={removeTiltEffect}>
      <Image src={imageURL ?? ""} alt={altContent} layout='fill' objectFit='cover' />
    </figure>
  )
}

const FeatureContent = ({ children, reversed }: featureContentType) => {

  return (
    <div className={`flex relative ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} 
     flex-col justify-between space-y-8 md:space-y-4  items-center`}
    >
      {children}
    </div>
  )
}

export default FeatureContent