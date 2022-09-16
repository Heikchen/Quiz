import React from "react"
import { Button } from "../Button/Button";
import { Categorie } from "../Categorie/Categorie";
import "./Navbar.css"



interface NavbarProps{
backgroundColor?:string;
onhandleClick?:()=>void;
}

export const Navbar=({backgroundColor, onhandleClick }: NavbarProps)=>{
    const [open, setOpen] = React.useState<boolean>(false);

    onhandleClick =():void=>{
    setOpen(!open);
}
    return(
    <div style={{backgroundColor}} className="navbar-container">
        <div className="navbar">
            <h1>Quiz</h1>
            <div className="navbar-btn">
                <div className="navbar-categorie">
                <Button primary size="medium" onClick={onhandleClick} label="Categories" />
                {open? <Categorie rows={["artliterature","language", "sciencenature", "general", "fooddrink", "peopleplaces", "geography", "historyholidays", "entertainment","toysgames","music", "mathematics", "religionmythology", "sportsleisure"]} position="absolute" top="36px"/>: <></>}
                </div>
                <Button primary size="medium" label="Login" />
                
            </div>
           
        </div>
         
    </div>)
}