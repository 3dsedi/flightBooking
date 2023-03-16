import React, { useState } from 'react';
import login from './login.png';
import './LoginSignupForm.css';

const LoginSignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleSignup = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Signup successful! Please login.');
  };

  return (
    <div
      className="login_back"
      style={{
        backgroundImage: `url(${login})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        className="login_form"
        style={{
          marginLeft: '230px',
          borderRadius: '40px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          className="login_input"
          style={{
            borderRadius: '40px',
            marginBottom: '10px',
          }}
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="login_input"
          style={{
            borderRadius: '40px',
            marginBottom: '10px',
          }}
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginSignupForm;
