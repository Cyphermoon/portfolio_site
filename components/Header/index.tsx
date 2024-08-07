import { headerType } from "../../types"
import Nav from "../Nav"


const Header = ({ children, addAnimation, heightFull }: headerType) => {
    return <header className="pt-6 space-y-20 flex flex-col">
        <Nav addAnimation={addAnimation} />
        {children ?
            <div className="grow flex flex-col sm:items-center sm:justify-center">
                {children}
            </div> :
            null
        }

    </header>
}

export default Header