import React from "react";

export default function CardGrid(props){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6">
            {props.children}
        </div>
    )
}