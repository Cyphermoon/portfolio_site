import Image from "next/image"
import Link from "next/link"
import { useReducer, useState } from "react"
import { hamburgerType } from "../../types"
import NavItem from "../NatItem"


const Logo = () => (
    <Link href="/">
        <a className="flex justify-between items-center">
            <Image src="/asset/cypher_moon_logo.png" alt="Portfolio logo" width={32} height={32} />
            <p className="ml-1 text-base">Cypher Moon</p>
        </a>

    </Link>
)

const Hamburger = ({ hamburgerClicked }: hamburgerType) => (
    <figure className="mr-4 inline-block md:hidden relative z-50" onClick={hamburgerClicked} >
        <Image src="/icons/hamburger__icon.svg" alt="Portfolio logo" width={32} height={32} />
    </figure>

)

const Nav = () => {
    const [navOpened, toggleNavState] = useReducer((initialState) => !initialState, false);

    return (
        <nav className="flex justify-between items-center">
            <Logo />

            <ul
                className={`origin-top-right  ${navOpened ? "flex animate-moveIn" : "hidden"} space-y-8 md:space-y-0 flex-col md:flex-row justify-center md:justify-between
                items-center bg-red-300 md:bg-transparent inset-0 md:inset-auto absolute md:static w-screen z-40 h-full md:h-auto md:flex md:max-w-xs`}>
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
                <Hamburger navState={navOpened} hamburgerClicked={toggleNavState} />
                <Image src={"/asset/theme_toggle.svg"} alt="Theme toggle icon" width={30} height={30} />
            </div>
        </nav>
    )
}

export default Nav