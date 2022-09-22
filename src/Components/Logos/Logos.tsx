import React from "react";
import "./Logos.css"

interface LogosProps{
    color?:string,
    logo:string,
    link:string,
    size: string,
}
export const Logos =({color, link, size, logo,...props}: LogosProps)=>{
return(<div>
    <div>
    <a href={link} style={{color}}>
            <i className={`fa-brands fa-${logo} fa-${size}x`}></i>
          </a>
          </div>
</div>)
}