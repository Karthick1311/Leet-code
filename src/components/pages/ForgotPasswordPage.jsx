// pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import '../styles/ForgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add functionality here to send a reset link to the provided email
    alert('Password reset link has been sent to your email!');
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset your password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="New password" />
          <input type="password" placeholder="Confirm password" />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remembered your password? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
