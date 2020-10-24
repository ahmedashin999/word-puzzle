import React from 'react';
 import {Link} from 'react-router-dom'
 import './home.css'
function Home() {
   
  return (
    <div className='home'>
    
      <button className="btn">
       <Link to="/countdown">Start</Link>
      </button>
 
    </div>
  );
}

export default Home;