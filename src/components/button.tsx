import React from "react";

export function Button({color, name, onClick}:{color:string, name:string, onClick:()=>void}){
    return(
        <button className={`bg-${color}-500 text-${color === 'blue' ? 'white' : 'black'} px-4 py-2 rounded-md border-${color}-500 border-2`} onClick={onClick}>{name}</button>
    )
}