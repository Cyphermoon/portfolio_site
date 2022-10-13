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
    const [theme, setTheme] = useState("dark");
    const [activeThemeMode, setActiveThemeMode] = useState("")
    let isDark = theme === "dark"
    let [darkThemeQuery, setDarkThemeQuery] = useState<MediaQueryList>()

    const setPreferredTheme = (themeValue: string,) => {
        setTheme(themeValue)
        localStorage.setItem("theme", themeValue)
    }

    const changeTheme = (isDarkTheme: boolean) => {
        const osTheme = isDarkTheme ? "dark" : "light"
        setPreferredTheme(osTheme)
    }

    const handleThemeChange = useCallback((e: MediaQueryListEvent) => {
        isDark = e.matches
        changeTheme(isDark)
        console.log("handle theme change has run")
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

        changeTheme(isDark ?? false)
        setActiveThemeMode("os")

        darkThemeQuery?.addEventListener && darkThemeQuery?.addEventListener("change", handleThemeChange)
    }

    const addDarkClass = useCallback(() => {
        const root = window.document.documentElement

        isDark ? root.classList.add("dark") : root.classList.remove("dark")
    }, [isDark])


    useEffect(() => {
        setDarkThemeQuery(window.matchMedia("(prefers-color-scheme:dark)"))
        console.log("theme set")
    }, [])

    useEffect(() => {
        addDarkClass()
    }, [theme, addDarkClass])


    useEffect(() => {
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