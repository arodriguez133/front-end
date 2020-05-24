import React, { useState } from "react";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const onInputChange = (event) => {};
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          name="username"
          placeholder="Username:"
        ></input>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name:"
        ></input>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="LastName:"
        ></input>
        <input type="text" id="email" name="email" placeholder="Email:"></input>
        <input
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
