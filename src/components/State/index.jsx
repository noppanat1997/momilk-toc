import React from "react"
import "./state.css"

const State = ({children}) => {
    return <div className="state">
        <p>{children}</p>
    </div>
}

export default State;