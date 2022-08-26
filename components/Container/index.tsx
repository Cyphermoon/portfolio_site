import { containerType } from "../../types"

const Container = ({ children }: containerType) => {
    return (
        <div className="container px-4 sm:px-0">
            {children}
        </div>
    )
}

export default Container