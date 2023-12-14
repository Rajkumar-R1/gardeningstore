import React from 'react';
import {  Link } from "react-router-dom";
import '../assets/styles/style.css'
function Login  (){
  return (
    <div className="wrapper" style={{ backgroundImage: "url('images/bg-registration-form-2.jpg')" }}>
      <div className="inner">
        <form action="">
          <h3>Login</h3>   
          <div className="form-wrapper">
            <label htmlFor="">Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
              <p>don't have an account<br />
              <Link to='/Register' className='text' >Signup</Link>
                <i className="zmdi zmdi-arrow-right" />
                </p>
          <button><Link to='/sucess' className='text'>Login now</Link></button>
                
        </form>
      </div>
    </div>
  );
};

export default Login;
