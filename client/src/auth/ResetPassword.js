import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../stylesheets/reset-password.scss";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match, please try again.");
      return;
    }
    setError("");
    setLoading(true);
    axios
      .post(`http://localhost:4001/reset-password/${token}`, { password })
      .then((res) => {
        setMessage(res.data.message);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  };

  return (
    <div className="auth-container reset-password-container">
      <div className="form-container">
        <h1>TMWDP</h1>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type new password"
          required
        />
        <input
          className="form-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-type new password"
          required
        />
        {!loading && error && <p className="text-danger">{error}</p>}
        {!loading && message && (
          <p className="text-success">
            {message} - <Link to="/auth/login">Login to your account</Link>
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
            "Reset password"
          )}
        </button>
      </div>
    </div>
  );
}
