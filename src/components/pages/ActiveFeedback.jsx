// ActiveFeedback.js
import React from 'react';
import '../styles/ActiveFeedback.css'; // Import the CSS file

const feedbackData = [
    {
        id: 1,
        studentName: 'John Doe',
        feedback: 'Great course! Really enjoyed the content and the pace.',
        date: '2024-10-01',
    },
    {
        id: 2,
        studentName: 'Jane Smith',
        feedback: 'The assignments were very helpful, but the deadlines were tight.',
        date: '2024-10-02',
    },
    {
        id: 3,
        studentName: 'Alice Johnson',
        feedback: 'I found the resources provided to be very useful!',
        date: '2024-10-03',
    },
];

const ActiveFeedback = () => {
    return (
        <div className="active-feedback-container">
            <h1>Active Feedback</h1>
            <div className="feedback-list">
                {feedbackData.map((item) => (
                    <div key={item.id} className="feedback-item">
                        <h2>{item.studentName}</h2>
                        <p>{item.feedback}</p>
                        <small>{item.date}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveFeedback;
