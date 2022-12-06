import React, { useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { useForm } from "react-hook-form";

import "../stylesheets/login.scss";

export default function forgotPasswordEmail() {
  const formRef = useRef();
  const { register, errors, handleSubmit } = useForm();
  const [loading, setLoading] = useState();
  const [errorStatus, setErrorStatus] = useState();
  const [okStatus, setOkStatus] = useState();

  const onSubmit = (data) => {
    setLoading(true);
    const formElement = formRef.current;
    const email = data.Email;

    const configuration = {
      method: "post",
      url: "http://localhost:4000/passwordReset",
      data: {
        email,
      },
    };

    axios(configuration)
      .then((result) => {
        if (result) {
          setOkStatus(result.data.message);
          setLoading(false);
        }
        formElement.reset();
      })
      .catch((error) => {
        console.log(error);
        setErrorStatus(error.response.data.message);
        setLoading(false);
        error = new Error();
      });
  };
  return (
    <div className="Login_Container">
      <div className="Form_Container">
        <h1>TMWDP</h1>
        <p>
          Enter the email address that you used to register. We'll send you an
          email with your username and a link to reset your password.
        </p>
        <form className="Form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <input
            className="Form_Input"
            type="text"
            placeholder="Email"
            id="login-email"
            {...register("Email", {
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
              `SEND`
            )}
          </button>
          <div className="error-div">
            <p className="text-danger mt-4">{errorStatus}</p>
            <p className="text-success mt-4">{okStatus}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export function newPassword() {
  return <></>;
}
