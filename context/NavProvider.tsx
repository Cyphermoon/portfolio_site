import React, { createContext, useCallback, useContext, useState } from "react"

interface Props {
    children: React.ReactNode
}

interface ContextProps {
    navOpened: boolean | undefined,
    setNavOpened: (navOpened: boolean) => void
    toggleNavState: () => void,
    revertState: () => void

}

const NavContext = createContext<ContextProps>({
    navOpened: undefined,
    setNavOpened: (navOpened: boolean) => { },
    toggleNavState: () => { },
    revertState: () => { }
})

export const useNavState = () => useContext(NavContext)


export const NavProvider = ({ children }: Props) => {
    const [navOpened, setNavOpened] = useState<boolean | undefined>(undefined)

    const toggleNavState = useCallback(() => {
        setNavOpened(!navOpened)
    }, [navOpened])

    const revertState = useCallback(() => {
        setNavOpened(undefined)
    }, [])

    return (
        <NavContext.Provider value={{ navOpened, setNavOpened, toggleNavState, revertState }}>
            {children}
        </NavContext.Provider>
    )
}