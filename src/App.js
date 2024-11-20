import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./components/pages/CreateAccount";
import Login from "./components/pages/Login";
import RoleSelection from "./components/pages/RoleSelection";
import ForgotPasswordPage from './components/pages/ForgotPasswordPage'; // Import the Forgot Password page
import StudentDashboard from './components/pages/StudentDashboard'; // Import the dashboard component
import SubmittedFeedback from './components/pages/SubmittedFeedback'; 
import ActiveFeedback from './components/pages/ActiveFeedback'; 
import StudentProfile from './components/pages/StudentProfile'; 




import './App.css'; // If you want a global CSS for app-wide styles

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<StudentProfile />} /> Default page - Login
          <Route path="/login" element={<Login />} /> {/* Login Page */}
          <Route path="/signup" element={<CreateAccount />} /> {/* Create Account Page */}
          <Route path="/role-selection" element={<RoleSelection />} /> {/* Role Selection Page */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Forgot Password route */}
          <Route path="/StudentDashboard" element={<StudentDashboard />} />{/*StudentDashboard route */}
          <Route path="/SubmittedFeedback" element={<SubmittedFeedback />} />
          <Route path="/ActiveFeedback" element={<ActiveFeedback />} />
          <Route path="/StudentProfile" element={<StudentProfile />}/> {/* Add route for profile */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
