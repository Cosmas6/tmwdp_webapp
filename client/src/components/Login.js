import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import "../stylesheets/login.scss";
import db from "../../firebase.config";

function Login() {
  const navigate = useNavigate();
  const errorRef = useRef();
  const formRef = useRef();
  const { register, errors, handleSubmit } = useForm();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const onSubmit = (data) => {
    const errorElement = errorRef.current;
    const formElement = formRef.current;
    const email = data.Email;
    const password = data.Password;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/dashboard");
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );
        formElement.reset();
      })
      .catch((error) => {
        console.log(error.message);
        errorElement.textContent = error.message;
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
              <p ref={errorRef}></p>
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
