import React from "react";
import "./Input.css"


interface InputProps{
type:string;
placeholder?:string;
width?:string;
border?: string;
}

export const Input =({type,placeholder,width, border, ...props}:InputProps)=>{
return(<div>
    <input className="input" type={type} style={{width, border}} name={placeholder} placeholder={placeholder}/>
    
</div>)
}