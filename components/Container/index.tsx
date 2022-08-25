import { containerType } from "../../types"

const Container = ({children} :containerType) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container