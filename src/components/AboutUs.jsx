import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <button className="btn border 2px">About us</button>
      </div>

      <div className="container mb-5">
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div>
            <button className="btn border 2px text-primary">
              Values and cultures
            </button>
            <p>1 - Deep Learning: Real understanding, no plagiarism.</p>
            <p>2 - Mutual Respect: Everyone has something to offer.</p>
            <p>3 - Growth Together: We move forward together.</p>
            <p>4 - Privacy and Trust: Members' data is protected.</p>
            <p>5 - Transparency: All activities are well-documented.</p>
            <p>6 - Future Focused: Our eyes are on tomorrow's tech.</p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <img
                src={assets.SharingCulture}
                alt="Sharing Culture"
                className="img-fluid"
                style={{ height: "300px", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-50 m-0 p-3 bg-dark rounded-start h-30 float-end mb-5"></div>

      <div className="container mt-5 mb-5 d-flex justify-content-between w-100">
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="">
            <img
              src={assets.Vision}
              alt="Sharing Culture"
              className="img-fluid"
              style={{ height: "300px", width: "auto" }}
            />
          </div>

          <div className="flex-column w-50 justify-content-between">
            <button className="btn border text-primary">
              Vision for the future
            </button>
            <p className="">
              <strong style={{ color: "#007bff" }}>@C0D3R2</strong> is more than
              a community. It is a future innovation powerhouse. With time,
              commitment, and resources, it aims to:
            </p>
            <ul>
              <li>Develop open-source software and operating systems</li>
              <li>
                Build robots, AI systems, Smart IoTs and autonomous tools etc...
              </li>
              <li>Create funding pipelines to support bold member ideas</li>
              <li>Establish physical labs or incubators</li>
              <li>
                Become a global reference in student-founded tech community
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-50 m-0 p-3 bg-primary rounded-end h-30 float-start p-2"></div>
    </>
  );
};

export default AboutUs;
