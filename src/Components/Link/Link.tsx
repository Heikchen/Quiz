import { number, string } from "prop-types";
import React from "react";
import "./Link.css";

interface LinkProps{
    color?: string;
    label:string;
    size?: "small "| "medium" | "large";
    onClick?: ()=>void;
    
}

export const Link =({label, color,size='medium',...props}: LinkProps)=>{
    return (<div className={['link', `link-${size}`,].join(' ')} style={{ color }}
      {...props}>{label}</div>);
}