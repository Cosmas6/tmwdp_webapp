import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { getFunctions, httpsCallable } from "firebase/functions";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import "./stylesheets/login.scss";

function Login() {
  const navigate = useNavigate();
  const sayHelloRef = useRef();
  const errorRef = useRef();
  const formRef = useRef();
  const { register, errors, handleSubmit } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  // useEffect(() => {
  //   const sayHelloButton = sayHelloRef.current;
  //   sayHelloButton.addEventListener("click", () => {
  //     //get function reference
  //     const functions = getFunctions();

  //     const sayHello = httpsCallable(functions, "sayHello");
  //     sayHello({ name: "Cosmas" }).then((result) => {
  //       // console.log(result.data);
  //     });
  //   });
  // }, []);

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
        <h1>TMWDP</h1>
        <form
          className="Form_Container"
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          <label className="Input_Label">Email</label>
          <input
            className="Form_Input"
            type="text"
            id="login-email"
            {...register("Email", {
              required: true,
            })}
          />
          <label className="Input_Label">Password</label>
          <input
            className="Form_Input"
            type="password"
            id="login-password"
            {...register("Password", {
              required: true,
            })}
          />
          <button className="Submit_Button" type="submit">
            Log In
          </button>

          <div className="error-div">
            <p ref={errorRef}></p>
          </div>
          <button className="Submit_Button" ref={sayHelloRef}>
            Say Hello
          </button>
          <p>
            Not Registered? <Link to="/register">Register Instead</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
