import Link from 'next/link'
import React from 'react'
import { navItemType } from '../../types'

const NavItem = ({ title, href, active }: navItemType) => (
    <Link href={href}>
        <a className={`text-title_md capitalize transition duration-150 ease-out relative bg-gradient-to-r dark:from-red-300 from-blue-700 dark:via-blue-500 via-slate-600 dark:to-blue-400 to-slate-800 bg-clip-text
        text-fill-color-transparent bg-size-200 bg-right-100  hover:bg-zero
        before:transition before:duration-250ms before:ease-linear before:origin-left sm:text-base before:absolute before:block before:-bottom-2 before:h-1 before:w-full rounded-lg before:bg-blue-500 before:left-0 before:scale-x-0 before:scale-y-100 hover:before:scale-x-100`}
        >
            {title}
        </a>
    </Link>
)

export default NavItem