import { containerType } from "../../types"

const Container = ({ children, className }: containerType) => {
    return (
        <div className={`space-y-32 container px-4 md:px-2 lg:px-0 ${className}`}>
            {children}
        </div>
    )
}

export default Container