import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Text } from "../Text/Text";
import "./Quiz.css";

interface QuizProps{
height: string,
answer:string,
category: string,
question: string,
disabled?: boolean,
visibility?:string,
getSolution?: ()=>void,
goToNext?:()=>void,
};

export const Quiz =({height, answer,category, question, disabled, visibility, getSolution, goToNext,...props}:QuizProps)=>{
    
    return(<div className="container-question">
        <div className="header-quiz">
        <Text label={category} fontSize="24px"  textTransform="capitalize"/>
        </div>
        <div className="quiz-container" style={{height}}>
           
        <div className="quiz-question">
            <div className="question-text">
             <Text fontSize="16px" label={question} color='white' />
             </div>
            <div className="quiz-input">
        <Input type='text'placeholder='Answer...' width='100%' border='3px solid transparent'/>
        </div>
        <div className="quiz-btn">
        <Text label={answer} fontSize="16px" visibility={visibility} color="white"/>
        <div className="quiz-answer">
        <Button primary={true} disabled={disabled} label='Answer' onClick={getSolution}/>
         <Button primary={true} disabled={disabled} label='Next' onClick={goToNext}/>
         </div>
         </div>
         </div>
         </div>
    </div>)
}

