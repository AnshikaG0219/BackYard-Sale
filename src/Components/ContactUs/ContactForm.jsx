import React from "react";
import "./Contact.css";
import { Form, Button, Container } from "react-bootstrap";

export default function ContactForm() {
  return (
    <div className="default">
      <div className="block">
        <h1>We'd love to hear from you.</h1>
        <h3>
          Whether you're curious about features, want to give book suggestions
          or just want to say Hi! 😀
        </h3>
      </div>

      <Container style={{ maxWidth: "80%", margin: "5% 10%" }}>
        <h2 style={{ textAlign: "center", color: "#262A53" }}>
          Let's Start a Conversation
        </h2>
        <br /> <br />
        <Form style={{ maxWidth: "29rem", margin: "auto" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control
              className="text-field"
              type="text"
              placeholder="Enter Name"
            />
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="text-field"
            />
            {/* <Form.Label>Example textarea</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Say Hi! or send your book suggestions."
              className="text-field"
            />
          </Form.Group>
          <Button variant="info" className="Submit" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
