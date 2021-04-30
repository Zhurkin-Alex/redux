import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login(props) {
  const loginHandler = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target;
    console.log(email, password);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
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
            <Link to="/game">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
