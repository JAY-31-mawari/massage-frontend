import React from "react";

const colorClasses = {
    blue: {
        bg: 'bg-blue-500',
        text: 'text-white',
        border: 'border-blue-500'
    },
    red: {
        bg: 'bg-red-500',
        text: 'text-white',
        border: 'border-red-500'
    },
    green: {
        bg: 'bg-green-500',
        text: 'text-white',
        border: 'border-green-500'
    },
    yellow: {
        bg: 'bg-yellow-500',
        text: 'text-black',
        border: 'border-yellow-500'
    },
    purple: {
        bg: 'bg-purple-500',
        text: 'text-white',
        border: 'border-purple-500'
    },
    gray: {
        bg: 'bg-gray-500',
        text: 'text-white',
        border: 'border-gray-500'
    },
    white:{
        bg: 'bg-white-500',
        text: 'text-black',
        border: 'border-gray-500'
    }
};

export function Button({color, name, onClick}:{color:string, name:string, onClick:()=>void}){
    const colorConfig = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
        return(
        <button 
            className={`${colorConfig.bg} ${colorConfig.text} px-4 py-2 rounded-md ${colorConfig.border} border-2`} 
            onClick={onClick}
        >
            {name}
        </button>
    )
}