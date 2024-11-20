import React, { useState } from 'react';
import '../styles/RoleSelection.css';
import { useNavigate } from 'react-router-dom';


const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState('student');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleNextClick = () => {
    console.log('Selected Role:', selectedRole);
    // Handle navigation based on role selection
    navigate('/login', { state: { role: selectedRole } });
  };

  return (
    <div className="role-selection-container">
      <h2>What’s your role?</h2>
      <div className="roles">
        <label className={`role-option ${selectedRole === 'student' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="role"
            value="student"
            checked={selectedRole === 'student'}
            onChange={handleRoleChange}
          />
          <img src="\student img.png" alt="Student" />
          <p>Student</p>
        </label>

        <label className={`role-option ${selectedRole === 'teacher' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="role"
            value="teacher"
            checked={selectedRole === 'teacher'}
            onChange={handleRoleChange}
          />
          <img src="\teacher img.png" alt="Teacher" />
          <p>Teacher</p>
        </label>

        <label className={`role-option ${selectedRole === 'admin' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={selectedRole === 'admin'}
            onChange={handleRoleChange}
          />
          <img src="\admin img.png" alt="Admin" />
          <p>Admin</p>
        </label>
      </div>
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
    
  );
};

export default RoleSelection;
