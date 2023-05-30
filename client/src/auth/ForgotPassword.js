import React, { useState, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "../stylesheets/forgot-password.scss";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const onSubmit = () => {
    setLoading(true);
    axios
      .post("http://localhost:4001/forgot-password", { email })
      .then((res) => {
        // Get reset link from response
        const resetLink = res.data.resetLink;
        const message = res.data.message;

        // Send email with reset link using EmailJS
        emailjs
          .send(
            "cosmas-email",
            "template_y0asgdd",
            {
              user_email: email,
              reset_link: resetLink,
            },
            "R_C_pBEN2CBbjzE89"
          )
          .then(
            (result) => {
              // console.log(result.text);
              setLoading(false);
            },
            (error) => {
              // console.log(error.text);
              setLoading(false);
            }
          );

        setMessage(message); // Set the message in state
      })
      .catch((err) => {
        setError(err.response.data);
        setLoading(false);
      });
  };

  return (
    <div className="auth-container forgot-password-container">
      <div className="form-container">
        <h1>TMWDP</h1>
        <label className="input-label">
          Enter the email address that you used to register. We'll send you an
          email with a link to reset your password.
        </label>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        {!loading && message && <p className="text-success">{message}</p>}
        {!loading && error && (
          <p className="text-danger">
            {error} - <Link to="/auth/register">Please Register</Link>
          </p>
        )}
        <button className="submit-button" onClick={onSubmit}>
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
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}
