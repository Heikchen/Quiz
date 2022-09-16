import { string } from "prop-types";
import React from "react";
import { Link } from "../Link/Link";
import "./Categorie.css";


interface CategorieProps{
    rows:string[];
    position:any;
    top:string;
}
export const Categorie=({rows, position,top}: CategorieProps)=>{
    return(<div className="categorie" style={{top, position}}>{rows.map((item)=>(<Link label={item}/>))}</div>)
}