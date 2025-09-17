import "./comment.css";

function ReviewList({ reviews, visibleCount, handleSeeMore }) {
  return (
    <section className="users container my-5" id="review">
      <h1>Some users <span>review</span></h1>
      <div className="row review">
        {reviews.slice(0, visibleCount).map((review) => (
          <div key={review.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="product text-center p-3">
              <div className="position-relative">
                <h3>{review.name}</h3>
              </div>

              {/* Render stars */}
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
