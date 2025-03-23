import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaGoogle, FaGithub } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home');
    }
  };

  return (
    <div className="app_login">
      <div className="login-container">
        <h1>Login</h1>

        {/* Login/Register Tabs */}
        <div className="tab-container">
          <span 
            className={`tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          <span 
            className={`tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </div>

        {/* Form Inputs */}
        <form className="form-container">
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <i className="fas fa-eye"></i>
          </div>

          {/* Disable button if email or password is empty */}
          <button 
            type="submit" 
            onClick={handleLogin} 
            className="login-btn" 
            disabled={!email || !password}
          >
            Login
          </button>
        </form>

        {/* Social Login Section */}
        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a className="facebook"><FaInstagram /></a>
            <a className="instagram"><FaGoogle /></a>
            <a className="pinterest"><FaGithub /></a>
            <a className="linkedin"><FaFacebook /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
