import React, { createContext, useContext, useState } from "react"

interface Props {
    children: React.ReactNode
}

interface ContextProps {
    navOpened: boolean,
    setNavOpened: (navOpened: boolean) => void
    toggleNavState: () => void

}

const NavContext = createContext<ContextProps>({
    navOpened: false,
    setNavOpened: (navOpened: boolean) => { },
    toggleNavState: () => { }
})

export const useNavState = () => useContext(NavContext)


export const NavProvider = ({ children }: Props) => {
    const [navOpened, setNavOpened] = useState(false)

    const toggleNavState = () => {
        setNavOpened(!navOpened)
    }

    return (
        <NavContext.Provider value={{ navOpened, setNavOpened, toggleNavState }}>
            {children}
        </NavContext.Provider>
    )
}