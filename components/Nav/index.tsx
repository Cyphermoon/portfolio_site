import Image from "next/image"
import NavItem from "../NatItem"

const Nav = () => (
    <nav className="flex justify-between">
        <div className="flex justify-between items-center">
            <Image src="/asset/cypher_moon_logo.png" alt="Portfolio logo" width={35} height={35} />
            <p className=" text-base">Cypher Moon</p>
        </div>

        <ul className="flex justify-between max-w-xs w-11/12">
            <li>
                <NavItem title="project" href="#" />
            </li>
            <li>
                <NavItem title="contact me" href="#" />
            </li>
            <li>
                <NavItem title="project" href="#" />
            </li>
        </ul>
        <div>
            <Image src={"/asset/theme_toggle.svg"} alt="Theme toggle icon" width={30} height={30} />
        </div>
    </nav>
)

export default Nav