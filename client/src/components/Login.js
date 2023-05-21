import React, { useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../stylesheets/login.scss";
const cookies = new Cookies();

function Login() {
  const formRef = useRef();
  const [loginStatus, setLoginStatus] = useState();
  const [loading, setLoading] = useState();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const formElement = formRef.current;
    const email = data.Email;
    const password = data.Password;

    const configuration = {
      method: "post",
      url: "https://nodejs.tmwdp.co.ke/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        if (result.data.token) {
          setLoginStatus(``);
          setLoading(false);
        }
        formElement.reset();
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        setLoginStatus(error.response.data.message);
        setLoading(false);
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

            <input
              className="Form_Input"
              type="text"
              placeholder="Email"
              id="login-email"
              {...register("Email", {
                required: true,
              })}
            />

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
              {loading ? (
                <div className="Loading_Div_Buttons">
                  <TailSpin
                    height="50"
                    width="50"
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              ) : (
                `LOGIN`
              )}
            </button>
            <div className="error-div">
              <p className="text-danger">{loginStatus}</p>
            </div>
            <p>
              Not Registered? <Link to="/auth/register">Register Instead</Link>
            </p>
            {/* <Link to="/forgotPasswordEmail">Forgot Password?</Link> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
