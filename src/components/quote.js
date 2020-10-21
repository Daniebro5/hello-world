import React from "react"

export default function Quote(props) {
    return (
    <h1 className={`px-4 py-10 italic text-white text-center ${props.backgroundColor}`}>{props.quote}</h1>
    )
}