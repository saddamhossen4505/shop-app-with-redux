import React from "react";
import "./Menu.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <Container>
          <Row>
            <Col>
              <div className="menu_item">
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Shop</Link>
                  </li>
                  <li>
                    <Link to={"/cart"}>Cart</Link>
                  </li>
                  <li>
                    <Link to={"/wishlist"}>WishList</Link>
                  </li>
                  <li>
                    <Link to={"/admin"}>Admin</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </>
  );
};

export default Menu;
