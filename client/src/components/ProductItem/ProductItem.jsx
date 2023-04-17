import React, { useState } from "react";
import "./ProductItem.scss";
import { Button, Card } from "react-bootstrap";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="product_items">
      <ProductViewModal show={show} onHide={() => setShow(false)} />
      <Card>
        <Link to={"/aaa"}>
          <Card.Img src="https://cdn-www.mediatek.com/page/Mobile-2_2021-10-20-155734_vspa.png"></Card.Img>
        </Link>
        <Card.Body>
          <Link to={"/aaa"}>
            <Card.Title>Realme note 10s</Card.Title>
          </Link>
          <div className="pricing">
            <span className="regular">$1200</span>
            <span className="sale">$900</span>
          </div>
          <div className="product_btn">
            <Button className="cart_btn">Add to cart</Button>
            <Button className="view_btn" onClick={() => setShow(true)}>
              Quick View
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
