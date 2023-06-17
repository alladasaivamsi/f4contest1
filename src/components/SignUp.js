import React, { useState } from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <>
      <SignUpMain />
    </>
  );
};

const SignUpMain = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errorField, setErrorField] = useState("");
  const [successField, setSuccessField] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorField("Name Cannot Be Empty!");
      setSuccessField("");
      return;
    }
    if (email === "") {
      setErrorField("Email Cannot Be Empty!");
      setSuccessField("");
      return;
    }
    if (password.length < 8) {
      setErrorField("Password Must Contain Atleast 8 Characters!");
      setSuccessField("");
      return;
    }
    if (password !== cPassword) {
      setErrorField("Passwords Doesn't Match!");
      setSuccessField("");
      return;
    } else {
      setSuccessField("Successfully Signed Up!");
      setErrorField("");
      return;
    }
  };

  return (
    <div className="container">
      <h1>SignUp</h1>
      <form className="form-container" onSubmit={handleFormData}>
        <div className="fullname">
          <input
            type="name"
            placeholder="Full Name"
            className="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            className="emailInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            className="passwordInput"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="confirmPassword">
          <input
            type="password"
            placeholder="Confirm Password"
            className="confirmPasswordInput"
            onChange={(e) => setCPassword(e.target.value)}
            value={cPassword}
          />
        </div>

        {errorField && <p className="errorField">{errorField}</p>}
        {successField && <p className="successField">{successField}</p>}

        <button type="submit" className="signUpBtn" onClick={handleFormData}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
