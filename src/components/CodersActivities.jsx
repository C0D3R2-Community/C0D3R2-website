import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const statsData = [
  {
    number: "05+",
    label: "members that makes the community",
    color: "black",
  },
  {
    number: "00+",
    label: "projects completed\nupcomming",
    color: "blue",
  },
  {
    number: "00+",
    label: "hackatons completed\nupcomming",
    color: "black",
  },
  {
    number: "00+",
    label: "years of experience\nexistency",
    color: "blue",
  },
  {
    number: "00+",
    label: "Researchs completed\nupcomming",
    color: "black",
  },
];


const CodersActivities = () => {

    const statItem = statsData.map((stat, idx) => (
      <div className="text-center p-1 border rounded d-flex justify-content-between align-items-center" /* style = {{width: "200px"}} */>
        <div>
          <h1 className="" style={{ color: "#3121E3" }}>
            {stat.number}
          </h1> 
          <small className="text-muted" style={{ whiteSpace: "pre-line" }}>
            {stat.label}
          </small>
        </div>
      </div>
    ));

  return (
    <Container className="text-center pt-4">
      <div className="d-flex flex-column align-items-center justify-content-center mb-2">
        <div style={{ border: "2px dashed black", padding: "10px", width: "auto" }}> <span className="fw-bold custom-primary-color-1">@C0D3R2</span> in numbers</div>
      </div>

      <div
        className="d-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 200px)",
          justifyContent: "center",
          gap: "10px", 
          alignItems: "stretch",
        }}
      >
        {statItem}
      </div>
    </Container>
  );
};

export default CodersActivities;
