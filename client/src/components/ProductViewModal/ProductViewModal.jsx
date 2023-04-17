import React from "react";
import "./ProductViewModal.scss";
import { Button, Modal } from "react-bootstrap";

const ProductViewModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Single Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_view_area">
            <div className="product_photo">
              <img
                src="https://cdn-www.mediatek.com/page/Mobile-2_2021-10-20-155734_vspa.png"
                alt=""
              />
            </div>
            <div className="product_details">
              <h3 className="product_title">Realme note 10s</h3>
              <hr />
              <div className="view_pricing">
                <span className="regular">$1200</span>
                <span className="sale">$900</span>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                qui possimus est aliquid illo nihil, quos ipsa fugiat deleniti
                atque.
              </p>
              <div className="view_btn">
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductViewModal;
