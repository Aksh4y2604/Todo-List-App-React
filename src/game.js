
import React,{useState} from "react";

function Mathgame(){
  
    const [num1,setNum1]=useState(1);
    const [num2,setNum2]=useState(1);
    const [score,setScore]=useState(0);
    const [answer,setAnswer]=useState("")
  
    const checkit =()=>{
      
      if (parseInt(answer)===num1+num2){
        setNum1(Math.ceil(Math.random()*10));
        setNum2(Math.ceil(Math.random()*10));
        setScore(score+1)
        console.log(num1,num2)
        setAnswer("")
  
        return false
        
      }
      else if(parseInt(answer)!==num1+num2){
        setScore(score-1)
        console.log("wrong")
      }
      
      return false
    };
    if (score<10){
    return(
      <div>
        <div className='Game'>
      <h1>{num1}+{num2}</h1>
            
            <input 
            type="text" 
            
            id="answer" 
            value={answer}
            onChange={(e)=>{setAnswer(e.target.value);}}
            />
            
            <button onClick={checkit}>Check</button>
          <h2>Score:{score}</h2>
        </div>
      </div>
      
    );}
    else{
      return(
        <div>
          <h1>YOU WON</h1>
        </div>
      );
    }
  }
export default Mathgame