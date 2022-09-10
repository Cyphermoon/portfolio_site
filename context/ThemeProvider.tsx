import React, { createContext, useContext, useEffect, useState } from 'react'

type themeProviderType = {
    children: React.ReactNode
}

const ThemeContext = createContext({
    theme: "",
    isDark: false,
    setPreferredTheme: (f: string) => { },
    setDarkTheme: () => { },
    setLightTheme: () => { },
    setOsTheme: () => { },
})

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }: themeProviderType) => {
    const [theme, setTheme] = useState("");
    let isDark = theme === "dark"

    const setPreferredTheme = (themeValue: string,) => {
        setTheme(themeValue)
        localStorage.setItem("theme", themeValue)
    }

    const setDarkTheme = () => {
        setPreferredTheme("dark")
    }

    const setLightTheme = () => {
        setPreferredTheme("light")
    }

    const setOsTheme = () => {
        const darkThemeQuery = window.matchMedia("(prefers-color-scheme:dark)")
        let isDark = darkThemeQuery.matches

        const changeTheme = (isDarkTheme: boolean) => {
            const osTheme = isDarkTheme ? "dark" : "light"
            setPreferredTheme(osTheme)
        }

        changeTheme(isDark)

        darkThemeQuery.addEventListener && darkThemeQuery.addEventListener("change", (e) => {
            isDark = e.matches
            changeTheme(isDark)
        })
    }

    const addDarkClass = () => {
        const root = window.document.documentElement

        isDark ? root.classList.add("dark") : root.classList.remove("dark")
    }

    useEffect(() => {
        addDarkClass()
        console.log(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, isDark, setPreferredTheme, setDarkTheme, setLightTheme, setOsTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider