import react from "react"
import Line2 from "./Line2"
import Line1 from "./Line1"

const LineList = () => {

    return (
        <svg width="100%" height="100%" overflow="visible">
            <Line1 />
            <Line2 />
        </svg>
    )
}

export default LineList