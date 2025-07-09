import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { assets } from "../assets/assets";

const Header = () => {
    return (
        <Container className="header mt-5">
            <Row className="align-items-center">
                <Col xs={12} md={6} className="mb-4 mb-md-0">
                    <div style = {{border: "2px dashed black", padding: "10px", width: "180px"}} className="mb-1">
                        Meet Our Community
                    </div>
                    <h2 className="font-weight-bold custom-primary-color-1 ">
                        Where people learn, share and grow together
                    </h2>
                    <p>
                        <strong className="font-weight-bold custom-primary-color-1 ">@COD3R2 </strong>
                        is a collaborative space where learners and professionals unite to grow,
                        build, and innovate. From free teaching to real-world projects and
                        research, we empower each other through knowledge-sharing and
                        future-focused development.
                    </p>
                    <a href = "https://forms.gle/esmjcd8B418bSfp87" target="_blank" rel="noopener noreferrer">
                        <Button variant="dark" className="join-button text-light border rounded">
                            Join us!
                        </Button>
                    </a>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <Image
                        src={assets.Hero}
                        alt="Header Image"
                        className="hero-image"
                        style={{ maxHeight: "300px", width: "100%", objectFit: "contain" }}
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;