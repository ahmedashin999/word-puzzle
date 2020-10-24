import React from 'react'
import  './progress.css';
function ProgressBar() {
    // function progress(timeleft, timetotal, $element) {
    //     var progressBarWidth = timeleft * $element.width() / timetotal;
    //     $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    //     if(timeleft > 0) {
    //         setTimeout(function() {
    //             progress(timeleft - 1, timetotal, $element);
    //         }, 1000);
    //     }
    // };
    
    // progress(600, 600,   $('#progressBar'));
     return (
        <div id="progressBar">
             <div className="bar"></div>
        </div>
    )
}

export default ProgressBar
