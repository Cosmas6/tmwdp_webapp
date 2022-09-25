import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../stylesheets/register.scss";

const Register = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const { register, errors, handleSubmit, reset } = useForm();
  const [registered, setRegistered] = useState(false);

  const onSubmit = (data) => {
    e.preventDefault();
    const formElement = formRef.current;
    const firstName = data.First_Name;
    const lastName = data.Last_Name;
    const email = data.Email;
    const password = data.Password;

    const configuration = {
      method: "post",
      url: "https://nodejs.tmwdp.co.ke/register",
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setRegistered(true);
        navigate("/dashboard");
        // formElement.reset();
      })
      .catch((error) => {
        //initialize error
        error = new Error();
      });

    console.log(firstName);

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     navigate("/dashboard");
    //     sessionStorage.setItem(
    //       "Auth Token",
    //       userCredential._tokenResponse.refreshToken
    //     );
    //     const user = userCredential.user;
    //     console.log(user);
    //     formElement.reset();
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     errorElement.textContent = error.message;
    //   });
  };

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
              {...register("First_Name", {
                required: true,
              })}
            />
            <label className="Input_Label">Last Name</label>
            <input
              className="Form_Input"
              type="text"
              id="register-lastName"
              {...register("Last_Name", {
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
            <div className="feedback-div">
              {registered ? (
                <p className="text-success">You Are Registered Successfully</p>
              ) : (
                <p className="text-danger">You Are Not Registered</p>
              )}
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
