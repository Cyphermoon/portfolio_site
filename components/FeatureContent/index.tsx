import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useTiltEffect } from '../../hooks/index.util'
import { featureContentImageType, featureContentType } from '../../types'

export const FeatureContentImage = ({ imageURL, altContent }: featureContentImageType) => {
  const { tiltCard, removeTiltEffect } = useTiltEffect()
  return (
    <figure
      className={`relative drop-shadow-2xl bg-opacity-0 shadow-slate-900 dark:drop-shadow-none w-full lg:w-5/12 h-[365px] bg-slate-100 ${imageURL ? "dark:bg-slate-900" : "dark:bg-slate-700"}`}
      style={{ transform: "perspective(1000px)" }}
      onMouseMove={tiltCard} onMouseLeave={removeTiltEffect}>
      {imageURL ?
        <Image src={imageURL ?? ""} alt={altContent} layout='fill' objectFit='contain' /> :
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>image is not available</p>
      }
    </figure>
  )
}

const FeatureContent = ({ children, reversed }: featureContentType) => {

  const t1 = useRef<GSAPTimeline>()
  const e1 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      t1.current = gsap.timeline({
        scrollTrigger: {
          trigger: e1.current
        },
        defaults: {
          duration: 1,
          ease: "power1.out",
        }
      })
        .from(".functionality_list > div", {
          translateY: +100,
          opacity: 0,
        })
        .from(".functionality_list figure", {
          translateX: reversed ? -100 : +100,
          opacity: 0
        })
    }, [e1])


    return () => {
      ctx.revert()
    }
  }, [reversed])


  return (
    <div ref={e1} className={`functionality_list flex relative ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} 
     flex-col justify-between space-y-8 md:space-y-4  items-center`}
    >
      {children}
    </div>
  )
}

export default FeatureContent