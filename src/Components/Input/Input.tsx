import React from "react";
import "./Input.css"


interface InputProps{
type:string;
placeholder?:string;
}

export const Input =({type,placeholder,...props}:InputProps)=>{
return(<div>
    <input className="input" type={type} placeholder={placeholder}/>
    
</div>)
}