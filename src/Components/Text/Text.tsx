import React from "react";
import "./Text.css"

interface TextProps{
label:string;
fontSize:string;
}

export const Text =({label, fontSize, ...props}:TextProps)=>{
    return(<p className="text" style={{fontSize}}>{label}</p>)
}