import React from "react";

export default function Tarjeta(props) {
    return (
        <div className="md:w-64">
            <img className="w-full h-56" src="https://source.unsplash.com/random"/>
            <h1 className="font-bold lg:text-xl">
                {props.titulo}
            </h1>
            <h3 className="text-gray-600 md:text-red-300 lg:text-blue-500">
                {props.canal}
            </h3>
            <div className="flex space-x-2 text-gray-600">
                <h3>
                    {props.numeroVisualizaciones}
                </h3>
                <h3>
                    {props.hora}
                </h3>
            </div>
        </div>
        
    )
}