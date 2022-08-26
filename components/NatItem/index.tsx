import Link from 'next/link'
import React from 'react'
import { navItemType } from '../../types'

const NavItem = ({ title, href, active }: navItemType) => (
    <Link href={href}>
        <a className={`${active && "text-blue-500"}`}>{title} </a>
    </Link>
)

export default NavItem