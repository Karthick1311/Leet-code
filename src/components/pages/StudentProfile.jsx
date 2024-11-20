import React, { useState } from "react";
import { Button, Input, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../styles/StudentProfile.css";

function StudentProfile ()  {
  
  const [formData, setFormData] = useState({
    name: "John Doe",
    sinNo: "123456789",
    regNo: "987654321",
    department: "Computer Science",
    email: "john@example.com",
    yearSem: "3 / 2",
    dob: "01/01/2000",
    profilePic: null,
  });

  // Toggle Edit mode
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
   
  };

  // Handle form submit
  const handleSave = (values) => {
    setFormData({
      ...formData,
      ...values,
    });
    setIsEditing(true);

    message.success("Profile updated successfully!");
    
  };

  // Handle profile picture upload
  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData({ ...formData, profilePic: e.target.result });
    };
    reader.readAsDataURL(file);
    return false; // Prevent auto-upload to the server
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-pic-container">
        <img
          src={formData.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-pic"
        />
        {isEditing && (
          <Upload beforeUpload={handleUpload} showUploadList={false}>
            <Button icon={<UploadOutlined />} className="upload-button"> </Button>
          </Upload>
        )}
      </div>

      <Form
        name="profileForm"
        initialValues={formData}
        onFinish={handleSave}
        layout="vertical"
        className="profile-form"
      >
        <div className="profile-fields">
          <Form.Item label="Name" name="name">
            <Input disabled={!isEditing} />
          </Form.Item>

          <Form.Item label="SIN No" name="sinNo">
            <Input disabled={!isEditing} />
          </Form.Item>

          <Form.Item label="Reg No" name="regNo">
            <Input disabled={!isEditing} />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input disabled={!isEditing} />
          </Form.Item>

          <Form.Item label="Department" name="department">
            <Input disabled={!isEditing} />
          </Form.Item>

          <Form.Item label="Year / Sem" name="yearSem">
            <Input disabled={!isEditing} />
          </Form.Item>

          <Form.Item label="Date of Birth" name="dob">
            <Input disabled={!isEditing} />
          </Form.Item>
        </div>

        {isEditing ? (
          <Button type="primary" htmlType="submit" className="save-button">
            Save Changes
          </Button>
        ) : (
          <Button type="primary" onClick={handleEdit} className="edit-button">
            Edit Profile
          </Button>
        )}
      </Form>
    </div>
  );
};

export default StudentProfile;
