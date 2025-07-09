import React from "react";
import { assets } from "../assets/assets";
import { Container, Row, Col, Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container fluid className="py-2">
      <Row className="align-items-center">
        <Col xs={8} sm={6} md={4} lg={3}
          style={{ display: "flex", alignItems: "center"}}
        >
          <img
            src={assets.CodersLogo}
            alt="Logo"
            className="logo-class"
            style={{ height: "50px", width: "auto" }}
          />
          <img
            src={assets.CodersLettermark}
            alt="Lettermark"
            className="lettermark-class"
            style={{ height: "35px", width: "auto" }}
          />
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} className="text-end">
        <a href = "https://forms.gle/esmjcd8B418bSfp87" target="_blank" rel="noopener noreferrer"><Button variant="primary">Join us!</Button></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
