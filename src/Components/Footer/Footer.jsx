import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Row, Col } from "react-bootstrap";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col lg={4} md={12}>
          <h4>Backyard Sale</h4>
          <p>
            Backyard Sale is a non profit business which aims to provide course
            books to students at resonable price who do not wish to buy new
            books every semeter or term.
          </p>
        </Col>
        <Col lg={4} md={12}>
          <h4>Contact Us</h4>
          <ul>
            <li>011-12345678</li>
            <li>query@backyardsale.com</li>
          </ul>
        </Col>
        <Col lg={4} md={12}  className="social">
        <EmailIcon style={{ marginRight: "1rem" }} />
        <CallIcon style={{ marginRight: "1rem" }} />
        <FacebookIcon style={{ marginRight: "1rem" }} />
        <InstagramIcon style={{ marginRight: "1rem" }} />
        </Col>
      </Row>
      <p style={{ marginBottom: "0px" }}> © Backyardsale.com 2021</p>
    </div>
  );
}
