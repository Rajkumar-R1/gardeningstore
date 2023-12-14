import React from 'react';
import {  Link } from "react-router-dom";
import '../assets/styles/style.css'
function Register  (){
  return (
    <div className="wrapper" style={{ backgroundImage: "url('images/bg-registration-2.jpg')" }}>
      <div className="inner"style={{ backgroundImage: "url('images/pexels-gelgas-airlangga-401213.jpg')" }}>
        <form action="">
          <h3>Registration Form</h3>
          <div className="form-group">
            <div className="form-wrapper">
              <label htmlFor="">First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Confirm Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> I accept the Terms of Use & Privacy Policy.
              <span className="checkmark"></span>
            </label>
          </div>
          <button><Link to='/login' className='text'>signup</Link></button>
                <p>Already have an account</p>
          <Link to='/login' className='text'>login</Link>
                <i className="zmdi zmdi-arrow-right" />
        </form>
      </div>
    </div>
  );
};

export default Register;
