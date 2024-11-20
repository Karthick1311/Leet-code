// StudentDashboard.js
import React from 'react';
import '../styles/StudentDashboard.css'; // import the CSS file
import { useNavigate } from 'react-router-dom';


const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleSubmitFeedback = (buttonType) => {
    // Different actions based on which button was clicked
    if (buttonType === 'view') {
        navigate('/SubmittedFeedback'); // Navigate to the submitted feedback page
    } else if (buttonType === 'active') {
        navigate('/ActiveFeedback'); // Navigate to the create feedback page
    } 
  };


  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Student Dashboard</h2>
        <ul>
          <li><a href="/StudentProfile">Profile</a></li>
          <li><a href="/ActiveFeedback">Feedback Forms</a></li>
          <li><a href="/SubmittedFeedback">Submitted Feedback</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome, Student!</h1>

        {/* Section with Cards */}
        <div className="section">
          <div className="card">
            <h3>Active Feedback Forms</h3>
            <p>Check out the latest feedback forms available to you.</p>
            <button onClick={()=>handleSubmitFeedback('active')}>View Feedback Forms</button>
          </div>
          <div className="card">
            <h3>Submitted Feedback</h3>
            <p>View feedback you’ve already submitted.</p>
            <button onClick={()=>handleSubmitFeedback('view')}>View Submitted Feedback</button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-info">
            
            <h3>Profile Information</h3>
            <p>Name :xxxxxxx</p>
            <p>Department : xxx</p>
            <p>SIN num : xxxxx</p>
            <p>College : xxxxxxxxxxxxx</p>
            <button className="btn-edit">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
