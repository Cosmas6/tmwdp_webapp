import React, { useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../stylesheets/register.scss";

const Register = () => {
  const navigate = useNavigate();
  const errorRef = useRef();
  const formRef = useRef();
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const errorElement = errorRef.current;
    const formElement = formRef.current;
    const email = data.Email;
    const password = data.Password;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/dashboard");
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );
        const user = userCredential.user;
        console.log(user);
        formElement.reset();
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        errorElement.textContent = error.message;
        // ..
      });
    // console.log("RESULT", data, email, password);
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
  return (
    <div className="Register_Container">
      <div className="Form_Container">
        <h1>TMWDP</h1>
        <div className="Form">
          <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <label className="Input_Label">First Name</label>
            <input
              className="Form_Input"
              type="text"
              id="register-firstName"
              {...register("First Name", {
                required: true,
              })}
            />
            <label className="Input_Label">Last Name</label>
            <input
              className="Form_Input"
              type="text"
              id="register-lastName"
              {...register("Last Name", {
                required: true,
              })}
            />
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
              Register
            </button>
            <div className="error-div">
              <p ref={errorRef}></p>
            </div>
            <p>
              Already a Member? <Link to="/login">Login Instead</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
