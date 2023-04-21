import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/shop/actions";

const CreateCategoryModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();

  // handleCategoryFormSubmit.
  const handleCategoryFormSubmit = (e) => {
    e.preventDefault();

    // Init Form_Data.
    const formData = new FormData();
    formData.append("name", input);
    formData.append("productCategory_Photo", photo);

    dispatch(createCategory({ data: formData }));
    setInput("");
    setPhoto(null);
    setModal(false);
  };

  return (
    <div className="create_category_modal">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>Add New Category</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCategoryFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Photo</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
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

export default CreateCategoryModal;
