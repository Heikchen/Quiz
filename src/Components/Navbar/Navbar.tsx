import React from "react"
import { Button } from "../Button/Button";
import { Categorie } from "../Categorie/Categorie";
import "./Navbar.css"



interface NavbarProps{
backgroundColor?:string;
onhandleClick?:()=>void;
open:any;
}

export const Navbar=({backgroundColor, onhandleClick, open, ...props}: NavbarProps)=>{
   
    return(
    <div style={{backgroundColor}} className="navbar-container">
        <div className="navbar">
            <h1>Quiz</h1>
            <div className="navbar-btn">
                <div className="navbar-categorie">
                <Button primary size="medium" onClick={onhandleClick} label="Categories" />
                {open}
                </div>
                <Button primary size="medium" label="Login" />
                
            </div>
           
        </div>
         
    </div>)
}