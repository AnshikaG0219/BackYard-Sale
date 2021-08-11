import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./AboutStyles.css";
import founder from '../assests/founder.jpg';

export default function AboutUs() {
  return (
    <>
      <Row style={{ margin: "0", minHeight: "100vh" }}>
        <Col className="welcome">
          <h1>
            Welcome to Backyard Sale
            <br />A platform to bring you books of your need at your comfortable
            price.
          </h1>
        </Col>
        <Col className="fixedBg"></Col>
      </Row>

      <Row style={{ margin: "0" }} className="aboutus">
        <Col
          lg={3}
          style={{
            backgroundColor: "#262a53",
            minHeight: "100vh",
            color: "#fff",
          }}
        >
          <h1 className="head" style={{ fontSize: "4rem" }}>
            About Us
          </h1>
        </Col>
        <Col lg={9} style={{ backgroundColor: "#F5C0C0", minHeight: "100vh" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "1rem",
              width: "70%",
              margin: "auto",
              padding: "10% 0",
            }}
            className="text"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </p>
        </Col>
      </Row>
      <Container className="founder">
        <Image src={founder} width="300" height="300" alt="Founder Image" roundedCircle />
        <div className="desc">
        <h2>Neelam Sagar</h2>
        <h4 style={{fontSize: "1rem", color : "#b2b1b9"}}>Founder</h4>
        </div>
        
      </Container>
    </>
  );
}
