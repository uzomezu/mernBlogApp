import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Landing.css";
let kevin =
  "https://uzomezu.github.io/L-etudient-qui-se-Promene/grainy_Kevin.png";
const Landing = () => (
  <Container
    style={{ height: "75vh" }}
    className="d-flex flex-column justify-content-center align-items-center"
  >
    {" "}
    <Row className="mb-4">
      <p className="text-secondary h3"> Blogging Application</p>
    </Row>
    <Row>
      <Col>
        <img src={kevin} alt="KevDev Blog" className="img-fluid" />
      </Col>
    </Row>
  </Container>
);

export default Landing;
