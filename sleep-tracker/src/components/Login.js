import React, { useState } from "react";
import * as yup from "yup";
const Login = (props) => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChange}
          id="email"
          name="email"
          value={formData.email}
          placeholder="Email:"
        ></input>

        <input
          onChange={onInputChange}
          id="password"
          name="password"
          value={formData.password}
          placeholder="Password:"
        ></input>

        <button id="button" name="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
