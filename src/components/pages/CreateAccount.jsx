import React from "react";
import { Link } from 'react-router-dom';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="create-account-container">
      <div className="form-container">
        <h2>Create your account</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter your mail ID" />
          <input type="text" placeholder="Institution ID" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
