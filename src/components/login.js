import React, { useState } from "react";
import "./login.css";
import Tablist from "./tabs";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const users = {
    user1: "password1",
    user2: "password2",
    user3: "password3",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username in users) {
      if (users[username] === password) {
        alert("Login successful!");
        setShowDashboard(true);
      } else {
        alert("Incorrect password, please try again.");
      }
    } else {
      alert("Username not found, please try again.");
    }
  };

  return (
    <div>
      {showDashboard ? (
        <Tablist user={username} />
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Username:&nbsp;</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <br />
            <label>Password:&nbsp;&nbsp;</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            <button className="btn btn-primary p-0 px-1" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
