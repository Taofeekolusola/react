import React from 'react';

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={onUsernameChange} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={onPasswordChange} 
      />
    </div>
  );
};

export default LoginForm;
