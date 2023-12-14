import React from "react";

import '../assets/styles/sucess.css'
import {Link} from 'react-router-dom'
const Success = () => {
  return (
    
    <body>
    <div className="Scriptcontent">
      <div id="card" className="animated fadeIn">
        <div id="upper-side">

          <h3 id="status">
            Success
          </h3>
        </div>
        <div id="lower-side">
          <p id="message">
             You are successfully loggedIn.
            <br/>
            Go to Home page
          </p>
          <buttton className='regissucess'>
         <Link to='/' className="text">Home</Link>
         </buttton>
         
        </div>
      </div>
    </div>
    </body>
  );
};

export default  Success;