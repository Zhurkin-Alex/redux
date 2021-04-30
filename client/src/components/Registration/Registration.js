import React from "react";
import './registration.css'
function Registration(props) {


const registHandler= (e)=>{
  e.preventDefault()
  const{
    name:{value:name},
    email:{value:email},
    password:{value:password},
  }=e.target
  console.log(name,email,password);
  fetch('/registration',{
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
}


  return (
    <div className="container">
      <section className="section">
        <div className="form-box">
          <form className="form" onSubmit={registHandler}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
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
              <label for="exampleInputEmail1" className="form-label">
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
              <label for="exampleInputEmail1" className="form-label">
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
