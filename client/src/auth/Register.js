import React, { useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "../stylesheets/register.scss";

export const colourOptions = [
  { value: "Spillway&Tunnels", label: "Spillway & Tunnels" },
  { value: "Instrumentation", label: "Instrumentation" },
  { value: "Dams", label: "Dams" },
];

const Register = () => {
  const formRef = useRef();
  const { register, errors, handleSubmit, reset, control } = useForm();
  const [loading, setLoading] = useState();
  const [registerStatus, setRegisterStatus] = useState();

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const onSubmit = (data) => {
    setLoading(true);
    const formElement = formRef.current;
    const firstName = data.first - name;
    const lastName = data.last - name;
    const department = data.Department;
    const email = data.Email;
    const password = data.Password;

    const configuration = {
      method: "post",
      url: "https://nodejs.tmwdp.co.ke/register",
      data: {
        firstName,
        lastName,
        department,
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        //if result is status 200
        setRegisterStatus(``);
        setLoading(false);
        window.location.href = "/login";
        formElement.reset();
      })
      .catch((error) => {
        setLoading(false);
        setRegisterStatus(error.response.data.message);
      });
  };

  return (
    <div className="auth-container register-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <h1>TMWDP</h1>
          <input
            className="form-input"
            type="text"
            placeholder="First Name"
            id="register-firstName"
            {...register("first-name", {
              required: true,
            })}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Last Name"
            id="register-lastName"
            {...register("last-name", {
              required: true,
            })}
          />

          <Controller
            control={control}
            rules={{ required: true }}
            name="Department"
            render={({ field: { onChange, value } }) => (
              <ReactSelect
                options={colourOptions}
                placeholder="Department..."
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                  Option,
                }}
                onChange={onChange}
                allowSelectAll={true}
                value={value}
              />
            )}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Email"
            id="login-email"
            {...register("Email", {
              required: true,
            })}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            id="login-password"
            {...register("Password", {
              required: true,
            })}
          />
          <button className="submit-button" type="submit">
            {loading ? (
              <div className="loader-button">
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
              `REGISTER`
            )}
          </button>
          <div className="feedback-div">
            <p className="text-danger">{registerStatus}</p>
          </div>
          <p>
            Already a Member? <Link to="/auth/login">Login Instead</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
