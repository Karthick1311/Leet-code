import React from 'react';
import '../styles/SubmittedFeedback.css';

const feedbackData = [
  {
    id: 1,
    title: "Feedback on React Course",
    studentName: "XXXXXXX",
    date: "XX-XX-XXXX",
    feedbackText: "The course was informative and the instructor was very clear in their explanations.",
    status: "Reviewed",
  },
  {
    id: 2,
    title: "Feedback on JavaScript Assignment",
    studentName: "XXXXXXX",
    date: "XX-XX-XXXX",
    feedbackText: "The assignment was quite challenging but I learned a lot from it.",
    status: "Pending",
  },
  // Add more feedback objects as necessary
];

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h2>Submitted Feedback</h2>
      <div className="feedback-list">
        {feedbackData.map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <h3>{feedback.title}</h3>
            <p><strong>Student:</strong> {feedback.studentName}</p>
            <p><strong>Date:</strong> {feedback.date}</p>
            <p className="feedback-text"><strong>Feedback:</strong> {feedback.feedbackText}</p>
            <p className={`status ${feedback.status.toLowerCase()}`}>{feedback.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
