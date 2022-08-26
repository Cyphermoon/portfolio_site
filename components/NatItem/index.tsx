import Link from 'next/link'
import React from 'react'
import { navItemType } from '../../types'

const NavItem = ({ title, href, active }: navItemType) => (
    <Link href={href}>
        <a className={`${active && "text-blue-500"} text-title_md sm:text-base`}>{title} </a>
    </Link>
)

export default NavItem