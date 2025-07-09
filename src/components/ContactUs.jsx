
import React, {useState} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import emailjs from "emailjs-com";



const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }

    const templateParams = {
      message: message, 
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response.status, response.text);
          alert("Your message has been sent!");
          setMessage(""); 
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };
  
  return (
    <Container className="text-center">
      <div className="d-flex flex-column align-items-center justify-content-center mb-2">
        <div style={{ border: "2px dashed black", padding: "10px", width: "auto" }}>Contact us</div>
      </div>

      <div className="d-flex justify-content-center gap-1 mb-1">
        <a href="mailto:c0d3r2tech@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail size={30} /></a>
        <a href = "https://whatsapp.com/channel/0029VbACuJt89indQZijAw1a" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
      </div>

      <p className="text-muted mb-1">leave a message · feedback · request</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex flex-column align-items-center">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="type here!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "300px",
              border: "2px solid #333",
              borderRadius: "8px",
              resize: "none",
            }}
          />
          <Button type = "submit" variant="primary" size="sm" className="mt-1 float-end">
            Send
          </Button>
        </Form.Group>
      </Form>

      <div className="mt-5 text-muted small">
        <a href="#aboutus" className="text-decoration-none mx-2">
          About us
        </a>
        |
        <a href="#joinus" className="text-decoration-none mx-2">
          Join us
        </a>
        |
        <a href="#ournumbers" className="text-decoration-none mx-2">
          Numbers
        </a>
      </div>
    </Container>
  );
};

export default ContactUs;
