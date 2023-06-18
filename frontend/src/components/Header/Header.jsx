import React from "react";
import "./Header.css";
import { Row, Container, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ============== Logo ============= */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* ============== Logo end ============= */}
            {/* ============== menu ============= */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-4">
                {nav__links.map((link, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={link.path}>{link.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ============== menu end ============= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
