import React, { useRef, useState } from "react";
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
  const [registered, setRegistered] = useState(false);

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
    const formElement = formRef.current;
    const firstName = data.First_Name;
    const lastName = data.Last_Name;
    const department = data.Department;
    const email = data.Email;
    const password = data.Password;

    
    const configuration = {
      method: "post",
      url: "http://localhost:4000/register",
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
        setRegistered(true);
        window.location.href = "/dashboard";
        formElement.reset();
      })
      .catch((error) => {
        //initialize error
        error = new Error();
      });
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
            <label className="Input_Label">Department</label>
            <Controller
              control={control}
              rules={{ required: true }}
              name="Department"
              render={({ field: { onChange, value } }) => (
                <ReactSelect
                  options={colourOptions}
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
