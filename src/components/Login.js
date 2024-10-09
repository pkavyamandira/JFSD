// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ role }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <div style={styles.container}>
      <h2>{role === 'student' ? 'Student Login' : 'Admin Login'}</h2>
      <p>{role === 'student' ? 'Log in to search and apply for scholarships.' : 'Log in to manage scholarship applications and student data.'}</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
  },
  form: {
    marginTop: '20px'
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default Login;
