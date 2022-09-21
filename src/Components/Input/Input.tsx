import React from "react";
import "./Input.css"


interface InputProps{
type:string;
placeholder?:string;
width?:string;
}

export const Input =({type,placeholder,width,...props}:InputProps)=>{
return(<div>
    <input className="input" type={type} style={{width}} placeholder={placeholder}/>
    
</div>)
}