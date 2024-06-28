import Image from "next/image"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react"
import { useTheme } from "../../context/ThemeProvider"
import { useAnimationClass } from "../../hooks/animationHook/index.hook"
import { hamburgerType, navPropType } from "../../types"
import NavItem from "../NatItem"
import ThemeToggle from "../ThemeToggle"
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaWindowRestore } from "react-icons/fa"
import gsap from "gsap"
import { useRouter } from "next/router"

const navItems = [
    { title: "projects", href: "/projects" },
    { title: "contact me", href: "/#contact_section" },
    { title: "skills", href: "/#skills_section" }
];

//TODO: Figure out this object purpose
const animationClasses = {
    animatable: "opacity-100",
    non_animatable: "opacity-100"
}

const MEDIUM_BREAKPOINT = 768

const Nav = ({ addAnimation }: navPropType) => {
    const [navOpened, setNavOpened] = useState<boolean | undefined>(undefined)
    const { animationClass, isAnimatable } = useAnimationClass(addAnimation, animationClasses)
    const { pathname } = useRouter()

    const handleNavState = () => {
        // Toggle nav state
        navOpened ? closeNav() : openNav()
    }

    const openNav = () => {
        // Open the nav and disble scrolling
        setNavOpened(true)
        document.body.classList.add("disable_scrolling")
    }

    const closeNav = (href?: string) => {
        // Do nothing if the window is larger than the medium breakpoint
        if (window && window.innerWidth > MEDIUM_BREAKPOINT) return
        // Enable scrolling
        document.body.classList.remove("disable_scrolling")
        // Do nothing if the href links to another page
        if (href && /^\/\w+/.test(href) && pathname !== href) return
        // Close the nav bar
        setNavOpened(false)
    }

    const mobileNavClass = () => {
        if (navOpened === undefined) return "hidden"

        return navOpened ? "flex animate-in fade-in-0 slide-in-from-right-full duration-700" :
            "flex animate-out slide-out-to-right-full fill-mode-forwards duration-500 fade-out-0"
    }

    useEffect(() => {
        // Animates the nav section when the component is mounted
        if (isAnimatable) {
            const navAnimation = gsap.from("#gsap_nav", {
                opacity: 0,
                duration: 1.5,
                // translateY: -10  
            })

            addAnimation(navAnimation, ">")

            return () => {
                navAnimation.revert()
            }
        }

    }, [addAnimation, isAnimatable])

    return (
        <nav id="gsap_nav" className={`flex justify-between items-center ${animationClass}`}>
            <Logo />

            <ul
                className={`origin-top-right ${mobileNavClass()} space-y-8 md:space-y-0 flex-col md:flex-row justify-center md:justify-between transition-colors duration-200 lg:opacity-100 lg:translate-x-0 lg:animate-none
                items-center bg-red-300 dark:bg-slate-900 md:bg-transparent inset-0 md:inset-auto fixed md:static w-screen z-40 h-full md:h-auto md:flex md:max-w-xs`}>
                {navItems.map((item, index) => (
                    <li key={index} onClick={() => closeNav(item.href)}>
                        <NavItem title={item.title} href={item.href} />
                    </li>
                ))}
            </ul>

            <div>
                <ThemeToggle />
            </div>

            <div className={`block md:hidden`}>
                <Hamburger navState={navOpened} hamburgerClicked={handleNavState} />
            </div>
        </nav>
    )
}

export default Nav

const Logo = () => (
    <Link href="/">
        <a className="flex justify-between items-center">
            <Image src="/images/avatar_me.jpeg" className="rounded-full" alt="Avatar Representation" width={32} height={32} />
            <p className="ml-2 text-base">Home</p>
        </a>
    </Link>
)

const Hamburger = ({ hamburgerClicked, navState }: hamburgerType) => {
    const { isDark } = useTheme()

    return <div className="mr-4 inline-block relative z-[60] text-2xl" onClick={hamburgerClicked} >
        {navState ? <FaTimes className="animate-in fade-in spin-in-180 duration-500" /> :
            <GiHamburgerMenu className={`animate-in fade-in-0 slide-in-from-right-3 duration-500`} />}
    </div>

}