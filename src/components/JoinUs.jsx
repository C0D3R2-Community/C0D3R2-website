import { Container, Row, Col, Button } from "react-bootstrap";

import { assets } from "../assets/assets";

const JoinUs = () => {
  const roles = [
    "Developer", "Learner", "Teacher", "Designer",
    "Tech Engineer", "Manager", "Marketer",
    "Hobbyist", "Beginner", "Professional"
  ];

  return (
    <div id = "joinus">
      <Container className="text-center mt-3">
        <div className="d-flex flex-column align-items-center justify-content-center mb-2">
          <div style={{ border: "2px dashed black", padding: "10px", width: "auto" }}>Join us</div>
        </div>
        <p>Interested in tech? Everyone is welcome!</p>
        <div className="d-flex justify-content-center align-items-center mb-1 flex-wrap gap-2">
          <span>Fill the Membership Form</span>
          <a href = "https://forms.gle/esmjcd8B418bSfp87" target="_blank" rel="noopener noreferrer"><Button variant="primary">Join us!</Button></a>
        </div>
        <div style = {{padding: "10px", width: "auto", display: "flex", justifyContent: "center", alignContent: "center" }} className="mb-3">
        <Row className="justify-content-center g-1 w-100">
          {roles.map((role, idx) => (
            <Col key={idx} xs="auto">
              <Button variant="outline-primary" size="sm">
                {role}
              </Button>
            </Col>
          ))}
        </Row>
        </div>
        <div className="">
          <div>
            <img
              src={assets.OpenedArm}
              alt="Hands illustration"
              className="img-fluid"
            />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default JoinUs;
