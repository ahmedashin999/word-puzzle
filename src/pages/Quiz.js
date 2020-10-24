import React from 'react'
import './quiz.css'
import {BsFillForwardFill} from 'react-icons/bs';
import ProgressBar from './ProgressBar'
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
                 <input type="text"/>
                 <input type="text"/>
                 <input type="text"/>
                 <input type="text"/>
                 <input type="text"/>
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
        </div>
        </div>
    )
}

export default Quiz
