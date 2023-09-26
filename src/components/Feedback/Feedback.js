// import React from 'react'
// import './Feedback.css'
// const Feedback = () => {
//   return (
//     <div className="outerfeedback">
//        <div className="upperfeedback">Rate Us</div> 
//        <div className="lowerfeedback">
//         <div className="feedbackrow">
//             <label htmlFor="">Email:-</label>
//             <input type="email" />
//         </div>
//         <div className="feedbackrow"></div>
//        </div>
//     </div>
//   )
// }

// export default Feedback
import React, { useState } from "react";
import StarRating from "./StarRating";
import './Feedback.css'
const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of the feedback (e.g., send to server)
    alert("Rating submitted:", rating);
    // You can also send the feedback to your backend here
  };

  return (
    <div className="outerfeedback">
      <div className="upperfeedback">Feedback Form</div>
      <form className="forrm" onSubmit={handleSubmit}>
        <StarRating onRatingChange={handleRatingChange} />
        <button className="feedbackbutton" type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
