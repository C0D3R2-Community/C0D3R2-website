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
  return (
    <Container className="text-center py-5">
      <div className="border border-dark border-dotted d-inline-block px-3 py-1 mb-4 rounded">
        <h5 className="m-0">
          <span style={{ color: "#3b38ff" }}>@C0D3R2</span> in numbers
        </h5>
      </div>

      <Row className="justify-content-center g-4">
        {statsData.map((stat, idx) => (
          <Col xs={10} sm={6} md={4} lg={3} key={idx}>
            <div className="d-flex align-items-center justify-content-start gap-2">
              <div
                style={{
                  width: "5px",
                  height: "40px",
                  backgroundColor: stat.color === "blue" ? "#3b38ff" : "#000",
                }}
              />
              <div>
                <h5 className="mb-1" style={{ color: "#3b38ff" }}>
                  {stat.number}
                </h5>
                <small
                  className="text-muted"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {stat.label}
                </small>
              </div>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "20px solid transparent",
                  borderBottom: "20px solid transparent",
                  borderLeft: `20px solid ${
                    stat.color === "blue" ? "#3b38ff" : "#000"
                  }`,
                  marginLeft: "5px",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CodersActivities;
