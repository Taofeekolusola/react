import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    login(); // call the login function
    setUsername(''); // clear username
    setPassword(''); // clear password
  };

  return (
    <div>
      <h2>Welcome To Login</h2>
      <LoginForm 
        username={username} 
        password={password} 
        onUsernameChange={handleUsernameChange} 
        onPasswordChange={handlePasswordChange} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;