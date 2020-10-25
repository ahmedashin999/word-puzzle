import React from 'react'
import './quiz.css'
import {BsFillForwardFill} from 'react-icons/bs';
import ProgressBar from './ProgressBar'
import firebase from 'firebase'
function Quiz() {

    const quizData=[
        {
          question:'The usually round,red or yellow,edible fruit of a small tree',
          correctAnswer:'APPLE'
        },
         
      ]
 
    return (
        <div className="quiz">
            <div className="quiz-content">
            <ProgressBar/>
            <button className="button">POINT</button>
              {quizData.map(ques=>(
     <p>{ques.question}</p>
   ))}
           
             <div className="input-content">
                 <div className="ans-input"></div>
                 <div className="ans-input"></div>
                 <div className="ans-input"></div>
                 <div className="ans-input"></div>
                 <div className="ans-input"></div>
             </div>
             <div className="ques-input-content">
                 <button>A</button>
                 <button>L</button>
                 <button>P</button>
                 <button>E</button>
                 <button>P</button>
                 <button>Z</button>
                 <button>X</button>
             </div>
             <button className="btn-icon">
                 <BsFillForwardFill/>
             </button>
             <button className="sign-out" onClick={()=>firebase.auth().signOut()}>Sign Out</button>
        </div>
        </div>
    )
}

export default Quiz
