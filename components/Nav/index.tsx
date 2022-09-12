import Image from "next/image"
import Link from "next/link"
import { useReducer, useState } from "react"
import { useTheme } from "../../context/ThemeProvider"
import { hamburgerType } from "../../types"
import NavItem from "../NatItem"
import ThemeToggle from "../ThemeToggle"


const Logo = () => (
    <Link href="/">
        <a className="flex justify-between items-center">
            <Image src="/icons/cypher_moon_logo.png" alt="Portfolio logo" width={32} height={32} />
            <p className="ml-1 text-base">Cypher Moon</p>
        </a>

    </Link>
)

const Hamburger = ({ hamburgerClicked }: hamburgerType) => {
    const { isDark } = useTheme()

    return <figure className="mr-4 inline-block md:hidden relative z-50" onClick={hamburgerClicked} >
        <Image
            style={{
                filter: `${isDark
                    ? "invert(93%) sepia(16%) saturate(103%) hue-rotate(177deg) brightness(96%) contrast(96%)"
                    : "brightness(0) saturate(100%) invert(9%) sepia(11%) saturate(3937%) hue-rotate(180deg) brightness(97%) contrast(83%)"}`
            }}
            src="/icons/hamburger__icon.svg" alt="Portfolio logo" width={32} height={32} />
    </figure>

}

const Nav = () => {
    const [navOpened, toggleNavState] = useReducer((initialState) => !initialState, false);

    return (
        <nav className="flex justify-between items-center">
            <Logo />

            <ul
                className={`origin-top-right  ${navOpened ? "flex animate-moveIn" : "hidden"} space-y-8 md:space-y-0 flex-col md:flex-row justify-center md:justify-between transition-none
                items-center bg-red-300 dark:bg-slate-900 md:bg-transparent inset-0 md:inset-auto absolute md:static w-screen z-40 h-full md:h-auto md:flex md:max-w-xs`}>
                <li>
                    <NavItem title="project" href="#" />
                </li>
                <li>
                    <NavItem title="contact me" href="/#contact_section" />
                </li>
                <li>
                    <NavItem title="project" href="#" />
                </li>
            </ul>
            <div>
                <ThemeToggle />
            </div>
            <div className={`block  md:hidden`}>
                <Hamburger navState={navOpened} hamburgerClicked={toggleNavState} />
            </div>
        </nav>
    )
}

export default Nav