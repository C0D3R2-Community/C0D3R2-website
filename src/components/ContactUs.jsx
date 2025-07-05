
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Container className="text-center">
      <div className="d-flex flex-column align-items-center justify-content-center mb-2">
        <div style={{ border: "2px dashed black", padding: "10px", width: "auto" }}>Contact us</div>
      </div>

      <div className="d-flex justify-content-center gap-1 mb-1">
        <MdEmail size={30} />
        <FaWhatsapp size={30} />
      </div>

      <p className="text-muted mb-1">leave a message · feedback · request</p>

      <Form>
        <Form.Group className="mb-3 d-flex flex-column align-items-center">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="type here!"
            style={{
              width: "300px",
              border: "2px solid #333",
              borderRadius: "8px",
              resize: "none",
            }}
          />
          <Button variant="primary" size="sm" className="mt-1 float-end">
            Send
          </Button>
        </Form.Group>
      </Form>

      <div className="mt-5 text-muted small">
        <a href="#" className="text-decoration-none mx-2">
          About us
        </a>
        |
        <a href="#" className="text-decoration-none mx-2">
          Join us
        </a>
        |
        <a href="#" className="text-decoration-none mx-2">
          Numbers
        </a>
      </div>
    </Container>
  );
};

export default ContactUs;


// import React from 'react'

// const ContactUs = () => {
//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
//       <button className='btn border rounded'>
//         <h4>Contact us</h4>
//       </button>
//       <div></div>
//       <div className="d-flex justify-content-center align-items-center text-center gap-2">
//         <p>About us</p>
//         <p>Join us</p>
//         <p>Numbers</p>
//       </div>
//     </div>
//   );
// }

// export default ContactUs
