import React, { useEffect,useState } from "react";
import {useSelector} from 'react-redux'
import "./login.css";
import { Link } from "react-router-dom";
import {addUser} from '../../redux/actions/addUser'
import store from '../../redux/store/store'

function Login(props) {
  const[name,setname]= useState()
  const state = useSelector((store)=>store)
  console.log(state.AlexReducer);
//  console.log(state.AlexReducer.user[0].UserPlay.name); 

  
  const loginHandler = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target;
    console.log(email, password);
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>store.dispatch(addUser(data)))
    
  };

  return (
    <div className="container">
      <section className="section">
        <div className="form-box">
          <form className="form" onSubmit={loginHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                name="email"
                type="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                name="password"
                type="password"
                aria-describedby="emailHelp"
              />
            </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            <Link to="/game">
            <button  className="btn btn-primary login-game">
                Game
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
