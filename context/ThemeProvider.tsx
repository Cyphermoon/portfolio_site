import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'

type themeProviderType = {
    children: React.ReactNode
}


const ThemeContext = createContext({
    activeThemeMode: "",
    isDark: false,
    setPreferredTheme: (f: string) => { },
    setDarkTheme: () => { },
    setLightTheme: () => { },
    setOsTheme: () => { },
})

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }: themeProviderType) => {
    const [theme, setTheme] = useState("");
    const [activeThemeMode, setActiveThemeMode] = useState("")
    let isDark = theme === "dark"
    let [darkThemeQuery, setDarkThemeQuery] = useState<MediaQueryList>()

    const setPreferredTheme = (themeValue: string,) => {
        setTheme(themeValue)
        localStorage.setItem("theme", themeValue)
    }

    const changeOsTheme = (isDarkTheme: boolean) => {
        const osTheme = isDarkTheme ? "dark" : "light"
        setPreferredTheme(osTheme)
    }

    // event handler for when the theme changes
    const handleThemeChange = useCallback((e: MediaQueryListEvent) => {
        isDark = e.matches
        changeOsTheme(isDark)
    }, [])

    const setDarkTheme = () => {
        darkThemeQuery?.removeEventListener && darkThemeQuery?.removeEventListener("change", handleThemeChange)
        setPreferredTheme("dark")
        setActiveThemeMode("dark")
    }

    const setLightTheme = () => {
        darkThemeQuery?.removeEventListener && darkThemeQuery?.removeEventListener("change", handleThemeChange)
        setPreferredTheme("light")
        setActiveThemeMode("light")
    }

    const setOsTheme = () => {
        let isDark = darkThemeQuery?.matches

        changeOsTheme(isDark ?? false)
        setActiveThemeMode("os")

        darkThemeQuery?.addEventListener && darkThemeQuery?.addEventListener("change", handleThemeChange)
    }

    const addDarkClass = useCallback((theme: string) => {
        const root = window.document.documentElement
        const isDark = theme === "dark"

        isDark ? root.classList.add("dark") : root.classList.remove("dark")
    }, [])


    useEffect(() => {
        setDarkThemeQuery(window.matchMedia("(prefers-color-scheme:dark)"))
    }, [])

    useEffect(() => {
        if (theme)
            addDarkClass(theme)

    }, [addDarkClass, theme])

    useEffect(() => {
        // get the theme from local storage and set it
        let userTheme = localStorage.getItem("theme")

        setPreferredTheme(userTheme ?? "dark")
        setActiveThemeMode(userTheme ?? "dark")
    }, [])

    return (
        <ThemeContext.Provider value={{ activeThemeMode: activeThemeMode ?? "", isDark, setPreferredTheme, setDarkTheme, setLightTheme, setOsTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider