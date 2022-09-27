import React from "react";
import { Logos } from "../Logos/Logos";
import "./Footer.css";

interface FooterProps{
backgroundColor: string;
height: string;
width: string;
}
export const Footer=({backgroundColor, height, width}:FooterProps)=>{
    return(   <div className="footer" style={{backgroundColor, height, width}}>
       <Logos logo="twitter" size="3" link="#" color="white"/>
        <Logos logo="github" size="3" link="#" color="white" />
         <Logos logo="facebook" size="3" link="#" color="white" />
    </div>
)    
}