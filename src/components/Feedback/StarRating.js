import React, { useState } from "react";
const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating); // Pass the rating back to the parent component
  };

  return (
    <div className="feedbackrow">
      <div className="rate">Please rate your experience:</div>
      <div>
      {[1, 2, 3, 4, 5].map((star) => (

        <span className="starr"
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: "pointer" }}
          >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
      </div>
    </div>
  );
};

export default StarRating;
