import React from "react";
import {useSelector} from 'react-redux'
import './registration.css'
import {addUser} from '../../redux/actions/addUser'
import store from '../../redux/store/store'


function Registration(props) {
const state = useSelector((store)=>store)
console.log(state);

const registHandler= (e)=>{
  e.preventDefault()
  const{
    name:{value:name},
    email:{value:email},
    password:{value:password},
  }=e.target
  // console.log(name,email,password);
  fetch('/auth/registration',{
    method:"POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password
    }),
  })
  .then(res=>res.json())
  .then(data=> store.dispatch(addUser(data)))
}


  return (
    <div className="container">
      <section className="section">
        <div className="form-box">
          <form className="form" onSubmit={registHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Ваше имя
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                id="exampleInputName1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                name="email"
                type="email"
                id="exampleInputEmail1"
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
                id="exampleInputPassword1"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Registration
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Registration;
