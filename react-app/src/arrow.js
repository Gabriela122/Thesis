import React from "react"

const Arrow = props => {
    return (
        <a href={props.anchor}>
            <div className="arrow">
                <p className="arrow-para">V</p>
            </div>
        </a>
    )
}

export default Arrow
