import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios
      .post(`http://localhost:4000/reset-password/${token}`, { password })
      .then((res) => alert(res.data))
      .catch((err) => alert(err.response.data));
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter new password"
        required
      />
      <button onClick={onSubmit}>Reset password</button>
    </div>
  );
}
