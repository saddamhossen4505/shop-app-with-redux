import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createBrand } from "../../redux/shop/actions";

const BrandModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();

  // handleBrandPhotoUpload.
  const handleBrandPhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  // handleCreateBrand.
  const handleCreateBrand = async (e) => {
    e.preventDefault();

    // Get form_Data.
    const formData = new FormData();
    formData.append("name", input);
    formData.append("productBrand_Photo", photo);
    dispatch(createBrand({ data: formData, setModal, setInput, setPhoto }));
  };

  return (
    <div className="create_brand_modal">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>Add New Brand</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateBrand}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand Photo</Form.Label>
              <Form.Control
                type="file"
                name="productBrand_Photo"
                onChange={handleBrandPhotoUpload}
              />
            </Form.Group>
            {photo && (
              <img
                style={{ maxWidth: "100%" }}
                src={URL.createObjectURL(photo)}
                alt=""
              />
            )}

            <br />
            <br />

            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrandModal;
