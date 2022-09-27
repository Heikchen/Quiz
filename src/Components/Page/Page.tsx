import axios from "axios";
import React from "react";
import { Categorie } from "../Categorie/Categorie";
import { Footer } from "../Footer/Footer";
import { Input } from "../Input/Input";
import { Navbar } from "../Navbar/Navbar";
import { Quiz } from "../Quiz/Quiz";
import "./Page.css"

interface PageProps{

}

export const Page=({})=>{
    const [open, setOpen] = React.useState<boolean>(false);
    const [category, setCategory]= React.useState<string>("toysgames");
    const [answer, setAnswer]=React.useState<any>([]);
    const [question, setQuestion]=React.useState<any>([]);
    const [isDisabled, setDisabled]=React.useState<boolean>(true);
    const [isVisibile, setVisibile]= React.useState<string>("hidden")
    
    const onhandleClick =():void=>{
    setOpen(!open);
    }

    const onCategory=(event:any):void=>{
     const newCategory = event.target.innerText;
     console.log(event.target.innerText)
     setCategory(newCategory);
     setOpen(!open)
    }

    const goToNext =():void=>{
    
        fetchQuestion();
     }
    const getSolution=():void=>{ 
      const input:any =  document.querySelector("input")
      const inputValue:string = input.value;
      if (answer.toLowerCase() == inputValue.toLowerCase()){
        input.style.border = "3px solid green"
      }else {
          input.style.border = "3px solid red"
      }
    setVisibile("visible")
     }
    
     const fetchQuestion =()=>{
         setVisibile("hidden");
         const input:any =  document.querySelector("input")
      input.value = ""
      input.style.border = "3px solid transparent"
        axios.get(`https://api.api-ninjas.com/v1/trivia?category=${category}`,
        { headers:{'X-Api-Key': 'B/rIZnz+5j+AZE1/Zb+SgA==y7X3fvlolUCHh2My'}})
        .then((response)=>{
            console.log(response.data[0]);
        setQuestion(response.data[0].question);
    setAnswer(response.data[0].answer)})
     }
     React.useEffect(()=>{
        fetchQuestion();
       
     },[category])
     
    return(
    <div>
       <Navbar onhandleClick={onhandleClick} open={open? <Categorie onCategory={onCategory} rows={["artliterature","language", "sciencenature", "general", "fooddrink", "peopleplaces", "geography", "historyholidays", "entertainment","toysgames","music", "mathematics", "religionmythology", "sportsleisure"]} position="absolute" top="36px"/>: <></>}/>
       <div className="main">
        <Quiz category={category} answer={answer} question={question} getSolution={getSolution} goToNext={goToNext} disabled={isDisabled} visibility={isVisibile} height="200px"/>
       </div> 
        <Footer backgroundColor="var(--primary-button-color)" height="148px" width="100%" />
    </div>)
}