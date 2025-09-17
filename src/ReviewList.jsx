import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import "./comment.css";

function ReviewList({ visibleCount, handleSeeMore }) {
  const [reviews, setReviews] = useState(Reviews);

  // Load from localStorage if exists
  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  // Update localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <section className="users container my-5" id="review">
      <h1>
        Some users <span>review</span>
      </h1>

      <div className="row review">
        {reviews.slice(0, visibleCount).map((review) => (
          <div key={review.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="product text-center p-3">
              <h3>{review.name}</h3>
              <div className="mb-2">
                {Array.from({ length: review.rating }, (_, i) => (
                  <i key={i} className="fa-solid fa-star text-warning"></i>
                ))}
              </div>
              <p>"{review.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewList;
