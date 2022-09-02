import Image from 'next/image'
import React from 'react'
import { featureContentImageType, featureContentType } from '../../types'

export const FeatureContentImage = ({ imageURL, altContent }: featureContentImageType) => (
  <figure className='relative w-full lg:w-1/2 h-80'>
    <Image src={imageURL} alt={altContent} layout='fill' objectFit='cover' />
  </figure>
)

const FeatureContent = ({ children, reversed }: featureContentType) => {
  return (
    <div className={`flex relative ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} 
     flex-col justify-between space-y-8 md:space-y-0  items-center`}>
      {children}
    </div>
  )
}

export default FeatureContent