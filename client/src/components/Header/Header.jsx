import React from "react";
import "./Header.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col md={3}>
              <div className="brandLogo">
                <Link to={"/"}>
                  <img
                    src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </Col>
            <Col md={9}></Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
