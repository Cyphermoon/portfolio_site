import Image from "next/image"
import Link from "next/link"
import { useReducer } from "react"
import { useTheme } from "../../context/ThemeProvider"
import { useAnimationClass } from "../../hooks/animationHook/index.hook"
import { hamburgerType, navPropType } from "../../types"
import NavItem from "../NatItem"
import ThemeToggle from "../ThemeToggle"
import { useNavState } from "../../context/NavProvider"
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from "react-icons/fa"


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



const Nav = ({ addAnimation }: navPropType) => {
    const { navOpened, toggleNavState } = useNavState()

    const animationClasses = {
        animatable: "opacity-100",
        non_animatable: "opacity-100"
    }

    const { animationClass, isAnimatable } = useAnimationClass(addAnimation, animationClasses)

    // useEffect(() => {
    //     if (isAnimatable) {
    //         const navAnimation = gsap.from("#gsap_nav", {
    //             opacity: 0,
    //             duration: 1,
    //             translateY: -10
    //         })

    //         addAnimation(navAnimation, ">")

    //         return () => {
    //             navAnimation.revert()
    //         }
    //     }

    // }, [addAnimation, isAnimatable])

    return (
        <nav id="gsap_nav" className={`flex justify-between items-center ${animationClass}`}>
            <Logo />

            <ul
                className={`origin-top-right  ${navOpened ? "flex animate-moveIn" : "hidden"} space-y-8 md:space-y-0 flex-col md:flex-row justify-center md:justify-between transition-colors duration-200
                items-center bg-red-300 dark:bg-slate-900 md:bg-transparent inset-0 md:inset-auto fixed md:static w-screen z-40 h-full md:h-auto md:flex md:max-w-xs`}>
                <li>
                    <NavItem title="projects" href="/projects" />
                </li>
                <li>
                    <NavItem title="contact me" href="/#contact_section" />
                </li>
                <li>
                    <NavItem title="skills" href="/#skills_section" />
                </li>
            </ul>
            <div>
                <ThemeToggle />
            </div>
            <div className={`block md:hidden`}>
                <Hamburger navState={navOpened} hamburgerClicked={toggleNavState} />
            </div>
        </nav>
    )
}

export default Nav