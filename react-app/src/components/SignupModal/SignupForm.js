import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignupForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    } else setErrors(["Passwords did not match. Please try again."]);
    history.push("/listings");
  };

  if (sessionUser) return <Redirect to="/listings" />;

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={onSignUp}>
        <h3>Sign Up</h3>
        <div className="errors-div">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label className="auth-label">User Name *</label>
          <input
            className="auth-input"
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div>
          <label className="auth-label">Email *</label>
          <input
            className="auth-input"
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label className="auth-label">Password *</label>
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div>
          <label className="auth-label">Confirm Password *</label>
          <input
            className="auth-input"
            type="password"
            name="repeat_password"
            placeholder="repeat password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button id="auth-submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
