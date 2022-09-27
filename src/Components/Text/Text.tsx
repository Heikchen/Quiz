import React from "react";
import "./Text.css"

interface TextProps{
label:string,
fontSize:string,
color?: string,
textTransform?:any,
visibility?: any,
}

export const Text =({label, fontSize,color, textTransform,visibility, ...props}:TextProps)=>{
    return(<p className="text" style={{fontSize, color, textTransform, visibility}}{...props}>{label}</p>)
}