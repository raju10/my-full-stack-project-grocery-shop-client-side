import React, { useEffect, useState } from "react";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";

const Testimonial = () => {
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/orderReviews")
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, []);
  return (
    <div id="review">
      <div
        className="d-flex justify-content-center mt-5 container"
        style={{ padding: "50px" }}
      >
        <div className="row ">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: "520",
            }}
          >
            Our Client <span style={{ color: "orange" }}>Reviews</span>
          </h3>
          {myReview.map((review) => (
            <TestimonialDetails review={review}></TestimonialDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
