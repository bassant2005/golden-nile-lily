import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import "./comment.css";
import florist from "./assets/c.png";

function Comment() {
  const [reviews, setReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const text = e.target.message.value.trim();
    const rating = parseInt(e.target.rating.value);

    if (!name || !text || !rating) return;

    const newReview = {
      id: Date.now(),
      name,
      text,
      rating,
      image: florist
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Reset form
    e.target.reset();

    // Ensure new review is visible
    setVisibleCount(prev => Math.max(prev, 3));
  };

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, reviews.length));
  };

  const handleShowLess = () => {
    setVisibleCount(3); // collapse back to initial 3
  };

  return (
    <>
      <ReviewList
        reviews={reviews.slice(0, visibleCount)}
      />

      <div className="text-center my-3">
        {visibleCount < reviews.length && (
          <a className="btn main-btn comment" onClick={handleSeeMore}>
            See more &gt;&gt;
          </a>
        )}
        {visibleCount >= reviews.length && reviews.length > 3 && (
          <a className="btn main-btn comment" onClick={handleShowLess}>
            Show less &lt;&lt;
          </a>
        )}
      </div>

      {/* Contact / Add Review Form */}
      <section className="contact mb-5" id="contact">
        <div className="container">
          <h1>Share your <span>review</span></h1>
          <div className="row contact-form align-items-stretch">

            {/* Form column */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex">
              <div className="p-4 w-100">
                <form className="h-100 d-flex flex-column" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <select id="rating" name="rating" className="form-control" required>
                      <option value="">Select rating</option>
                      <option value="1">1 star</option>
                      <option value="2">2 stars</option>
                      <option value="3">3 stars</option>
                      <option value="4">4 stars</option>
                      <option value="5">5 stars</option>
                    </select>
                  </div>

                  <div className="mb-3 flex-grow-1">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="8"
                      className="form-control"
                      placeholder="(up to 200 character) Write your review here..."
                      required
                      maxLength={200}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn main-btn mt-auto">Add Review</button>
                </form>
              </div>
            </div>

            {/* Image column */}
            <div className="col-lg-6 col-md-12 text-center d-flex">
              <div className="img position-relative contact-form rounded w-100 d-flex align-items-center justify-content-center">
                <img src={florist} alt="Florist" className="img-fluid rounded" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Comment;
