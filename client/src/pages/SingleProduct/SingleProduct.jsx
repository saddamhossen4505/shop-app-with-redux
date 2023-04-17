import React from "react";
import "./SingleProduct.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import ProductItem from "../../components/ProductItem/ProductItem";

const SingleProduct = () => {
  return (
    <div className="single_product_page">
      <Container>
        <Row>
          <Col md="6">
            <div className="product_photo_area">
              <img
                src="https://cdn-www.mediatek.com/page/Mobile-2_2021-10-20-155734_vspa.png"
                alt=""
              />
            </div>
          </Col>
          <Col md="6">
            <div className="product_info">
              <h3 className="product_title">Readme note 10s</h3>
              <div className="pricing">
                <span className="regular">$1200</span>
                <span className="sale">$900</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                voluptas, magni itaque accusantium, iusto placeat ipsa, ex
                laudantium voluptate assumenda officia nesciunt dolor
                praesentium natus eaque ab! Maxime animi officia quia ut modi!
                Porro vero enim nam quas et maxime possimus sit quia nobis
                commodi, ea perspiciatis facere? Eum, voluptatum!
              </div>
              <span className="stock">20 in stock</span>
              <div className="button_area">
                <input type="number" />
                <Button className="cart_btn">Add to cart</Button>
                <Button className="wish_btn">
                  <AiOutlineHeart />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="related_product_area my-5">
          <Col md="12">
            <hr />
            <h2 className="related_product_title">Related Product</h2>
          </Col>
          <Col md="12" className="my-5">
            <div className="related_product_items">
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
