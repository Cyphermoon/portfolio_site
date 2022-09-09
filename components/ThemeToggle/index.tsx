import React from 'react'
import { useTheme } from '../../context/ThemeProvider'
import { toggleButtonType } from './themeToggle'



const ToggleButton = ({ children, handleClick }: toggleButtonType) => {
    return <button onClick={handleClick}>
        {children}
    </button>
}

const ThemeToggle = () => {
    const { setDarkTheme, setOsTheme, setLightTheme } = useTheme()




    return (
        <div className='flex space-x-4'>
            <ToggleButton handleClick={setDarkTheme}>
                d
            </ToggleButton>
            <ToggleButton handleClick={setOsTheme}>
                os
            </ToggleButton>
            <ToggleButton handleClick={setLightTheme}>
                L
            </ToggleButton>
        </div>
    )
}

export default ThemeToggle