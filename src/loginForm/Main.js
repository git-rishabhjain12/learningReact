import React, { useState } from "react";

function Main() {
  const [users, setUsers] = useState([]);

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { ...registerData };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setRegisterData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );
    if (foundUser) {
      setIsLoggedIn(true);
      console.log("Login successful");
    } else {
      setIsLoggedIn(false);
      console.log("Invalid login credentials");
    }
    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="loginForm">
            
          <h1>Login Form</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {loginEmail}</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}

      {!isLoggedIn && (
        <div className="registerForm">
          <h1>Register Form</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={registerData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={registerData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
            />

            <button type="submit">Register</button>
          </form>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <h2>Registered Users</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.firstName} {user.lastName} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Main;
