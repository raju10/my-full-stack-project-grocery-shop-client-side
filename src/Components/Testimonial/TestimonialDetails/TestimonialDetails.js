import React, { useEffect } from "react";
/////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////
const TestimonialDetails = (props) => {
  const { email, loginUserPhoto, name } = props.review;
  const { myName, cName, description } = props.review.data;
  ////////////

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  /////////////
  return (
    <div className="col-md-3 mt-5" data-aos="fade-right">
      <div
        style={{
          boxShadow: "5px 5px 8px grey",
          padding: "10px 15px",
          background: "#f4fdfb",
        }}
      >
        <div className="d-flex align-items-center ">
          <div className="  mr-3">
            <img
              src={loginUserPhoto}
              alt=""
              className="w-100"
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div>
            <span>{myName}</span>
            <br />
            <small style={{ color: "green", fontWeight: "500" }}>{cName}</small>
            <br />
            <small className="text-secondary">{email}</small>
          </div>
        </div>
        <p className="pt-3" style={{ color: "#555" }}>
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialDetails;
