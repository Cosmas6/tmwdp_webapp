import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import "../stylesheets/login.scss";
const cookies = new Cookies();

function Login() {
  const formRef = useRef();
  const [loginState, setLoginState] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formElement = formRef.current;
    const email = data.Email;
    const password = data.Password;

    const configuration = {
      method: "post",
      url: "http://localhost:4000/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setLoginState(true);
        formElement.reset();
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <div className="Login_Container">
        <div className="Form_Container">
          <h1>TMWDP</h1>
          <form
            className="Form"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            {/* <label className="Input_Label">Email</label> */}
            <input
              className="Form_Input"
              type="text"
              placeholder="Email"
              id="login-email"
              {...register("Email", {
                required: true,
              })}
            />
            {/* <label className="Input_Label">Password</label> */}
            <input
              className="Form_Input"
              type="password"
              placeholder="Password"
              id="login-password"
              {...register("Password", {
                required: true,
              })}
            />
            <button className="Submit_Button" type="submit">
              LOGIN
            </button>
            <div className="error-div">
              {loginState ? (
                <p className="text-success">You Are Logged in Successfully</p>
              ) : (
                <p className="text-danger">You Are Not Logged in</p>
              )}
            </div>
            <p>
              Not Registered? <Link to="/register">Register Instead</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
