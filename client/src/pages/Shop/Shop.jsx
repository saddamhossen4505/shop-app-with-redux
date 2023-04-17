import React from "react";
import "./Shop.scss";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../../components/ProductItem/ProductItem";
import Sidebar from "../../components/Sidebar/Sidebar";

const Shop = () => {
  return (
    <>
      <section className="shop_page my-5">
        <Container>
          <Row>
            <Col md="3">
              <Sidebar />
            </Col>
            <Col md="9">
              <div className="product_item_wrapper">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
