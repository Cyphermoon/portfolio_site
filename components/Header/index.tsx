import { headerType } from "../../types"
import Nav from "../Nav"


const Header = ({ children }: headerType) => {
    return <div className="pt-6 space-y-20 flex flex-col">
        <Nav />
        <div className="grow flex md:items-center md:justify-center">
            {children}
        </div>

    </div>
}

export default Header