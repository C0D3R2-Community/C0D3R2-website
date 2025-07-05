import React from "react";
import { assets, values, visions } from "../assets/assets";



const AboutUs = () => {
  const valuesData = values;
  const visionsData = visions;

  const valuesList = valuesData.map((value) => (
    <div key={value.id} className="value-card text-center p-3 m-2 border rounded">
      <img
        src={value.image}
        alt={value.title}
        className="img-fluid"
        style={{ height: "80px", width: "auto" }}
      />
      <h5 className="mt-2">{value.title}</h5>
      <p>{value.description}</p>
    </div>
  ));

  const visionsList = visionsData.map((vision) => (
    <div
      key={vision.id}
      className="vision-card text-center p-1 m-2 border rounded d-flex flex-column justify-content-between align-items-center"
      style={{ minHeight: "250px" }}
    >
      <img
        src={vision.image}
        alt={vision.title}
        className="img-fluid"
        style={{ height: "80px", width: "auto" }}
      />
      <h5 className="mt-2">{vision.title}</h5>
      <p>{vision.description}</p>
    </div>
  ));

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4 mb-2">
        <div style={{ border: "2px dashed black", padding: "10px", width: "auto" }}>About us</div>
      </div>

      <div className="container mb-1">
        <div className="d-flex flex-column align-items-center justify-content-center mt-3">
          <div>
            <h2 className="font-weight-bold text-center custom-primary-color-1 ">
              Values and cultures
            </h2>
            <div
              className="d-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {valuesList}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-1 d-flex flex-column justify-content-center align-items-center">
        <div style={{ width: "1230px" }}> 
          <h2 className="font-weight-bold text-center custom-primary-color-1 ">
            Vision for the future
          </h2>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p className="" style={{ textAlign: "center", width: "45%"}}>
            <strong className="font-weight-bold custom-primary-color-1 ">@C0D3R2</strong> is more than a
            community. It is a future innovation powerhouse. With time, commitment,
            and resources, it aims to:
          </p>
          </div>
          <div
            className="d-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 300px)",
              justifyContent: "center",
              gap: "10px", 
              alignItems: "stretch",
            }}
          >
            {visionsList}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;