import React, { useState } from "react";
import * as yup from "yup";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const onInputChange = (event) => {
    setFormData({
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
          type="text"
          id="name"
          name="username"
          value={formData.username}
          placeholder="Username:"
        ></input>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          placeholder="First Name:"
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          placeholder="LastName:"
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          id="email"
          name="email"
          value={formData.password}
          placeholder="Email:"
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        ></input>
        <button type="text" id="button" name="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Onboarding;
