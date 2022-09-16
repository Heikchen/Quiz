import { string } from "prop-types";
import React from "react";
import { Link } from "../Link/Link";
import "./Categorie.css";


interface CategorieProps{
    rows:string[];
    position:any;
    top:string;
    onCategory?:()=>void;
}
export const Categorie=({rows, position,top, onCategory,...props}: CategorieProps)=>{
    return(<div className="categorie" style={{top, position}}>{rows.map((item)=>(<Link onClick={onCategory}label={item}/>))}</div>)
}