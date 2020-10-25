import React from 'react';
 import {Link} from 'react-router-dom'
 import './home.css'
function Home() {
   
  return (
    <div className='home'>
        <p>Login to start the quiz</p>
      <button className="btn">
       <Link to="/sign-up">Login</Link>
      </button>
 
    </div>
  );
}

export default Home;