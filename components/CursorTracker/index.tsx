import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeProvider'

type eyeSocketPropType = {
    rotation: number
}

const EyeSocket = ({ rotation }: eyeSocketPropType) => {
    const { isDark } = useTheme()

    return (
        <div className='w-10 relative h-10 border border-slate-700 dark:border-slate-400 rounded-full flex items-center justify-center'>

            <div className='h-5 w-2 flex flex-col items-center justify-end' style={{ transform: `rotate(${rotation + 90}deg)` }}>

                <Image
                    src={"/icons/circle.svg"}
                    style={{
                        filter: `${isDark
                            ? "invert(74%) sepia(2%) saturate(3408%) hue-rotate(176deg) brightness(94%) contrast(66%)"
                            : "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)"}`
                    }}
                    alt="Eyeball svg" width={10} height={10} />
            </div>
        </div>
    )
}

const CursorTracker = () => {
    let cursorRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState(0);

    const angle = (x1: number, y1: number, x2: number, y2: number) => {
        const dx = x2 - x1
        const dy = y2 - y1

        const angleInRad = Math.atan2(dy, dx);
        const angleInDeg = angleInRad * 180 / Math.PI

        return angleInDeg
    }

    useEffect(() => {
        let boundingClientRect = cursorRef.current?.getBoundingClientRect();
        let centerX = boundingClientRect?.left ?? 0 + (boundingClientRect?.width ?? 0 / 2)
        let centerY = boundingClientRect?.top ?? 0 + (boundingClientRect?.height ?? 0 / 2)

        document.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            setRotation(angle(mouseX, mouseY, centerX, centerY));
        })

    })

    return (
        <div ref={cursorRef} className='flex space-x-4 absolute top-20 left-[100px]'>
            <EyeSocket rotation={rotation} />
            <EyeSocket rotation={rotation} />
        </div>
    )
}

export default CursorTracker