import Image from 'next/image'
import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import { toggleButtonType } from './themeToggle'



const ToggleButton = ({ children, handleClick, active }: toggleButtonType) => {
    return <button className={`relative w-5 h-5 ${active && "ring-slate-600 dark:ring-slate-400 ring-2"}`} onClick={handleClick}>
        {children}
    </button>
}

const ThemeToggle = () => {
    const { setDarkTheme, setOsTheme, setLightTheme, isDark, activeThemeMode } = useTheme()


    return (
        <div className='flex align-baseline space-x-6 bg-slate-200 dark:bg-slate-700 rounded-lg py-1 px-4'>
            <ToggleButton handleClick={setDarkTheme} active={activeThemeMode === "dark"}>
                <Image
                    style={{
                        filter: `${isDark
                            ? "invert(67%) sepia(14%) saturate(434%) hue-rotate(175deg) brightness(94%) contrast(87%)"
                            : "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)"}`
                    }}
                    src={"/icons/dark_mode_icon.svg"}
                    alt="dark mode icon"
                    layout='fill' />
            </ToggleButton>
            <ToggleButton handleClick={setOsTheme} active={activeThemeMode === "os"}>
                <span className='font-normal'>OS</span>
            </ToggleButton>
            <ToggleButton handleClick={setLightTheme} active={activeThemeMode == "light"}>
                <Image
                    style={{
                        filter: `${isDark
                            ? "invert(67%) sepia(14%) saturate(434%) hue-rotate(175deg) brightness(94%) contrast(87%)"
                            : "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)"}`
                    }}
                    src={"/icons/light_mode_icon.svg"}
                    alt="light mode icon"
                    layout="fill" />
            </ToggleButton>
        </div>
    )
}

export default ThemeToggle