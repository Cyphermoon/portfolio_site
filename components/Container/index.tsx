import { containerType } from "../../types"

const Container = ({ children, className }: containerType) => {
    return (
        <div className={`container px-4 md:px-2 lg:px-4 ${className}`}>
            {children}
        </div>
    )
}

export default Container