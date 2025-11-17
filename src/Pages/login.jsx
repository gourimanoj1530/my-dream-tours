import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Login successful');
      navigate('/home');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div
      className="sign-in-container"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/abstract-blur-airport-terminal-interior.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sign-in-form-container">
        <h1>WELCOME BACK</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="USER NAME/Email :"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="PASSWORD :"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="sign-in-options">
            <label>
              <input type="checkbox" /> SAVE PASSWORD
            </label>
            <Link to="/forgot-password">FORGOT PASSWORD</Link>
          </div>

          <button type="submit">SUBMIT</button>
        </form>

        <div>
          <Link to="#">
            <img
              src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
              alt="Google"
              className="google-icon"
            />{' '}
            SIGN IN WITH GOOGLE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
