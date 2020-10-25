import React from 'react'
import Countdown from 'react-countdown';
import Quiz from './Quiz';
import countdown from './music/countdown.mp3'
 
import './countdown.css'
function CountDown() {
    const renderer = ({ hours, minutes, seconds, completed })=>{
        if(completed) {
         return   <Quiz/>
        }else{
    return <div className="timer">{seconds}</div>}

    } 
     
    return (
        <Countdown
        date={Date.now() + 3000}
          renderer={renderer}
       > 
       
             <audio controls>
                 <source src={countdown} type="audio/mp3"></source>
                 </audio>
             
           </Countdown>
            

      
    )
}

export default CountDown

