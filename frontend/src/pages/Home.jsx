import React from "react";
import "../styles/home.css";
import Subtitle from "../shared/Subtitle";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVedio from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creacting{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet 
                lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet 
                lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet 
                lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet 
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVedio} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
