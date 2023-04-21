import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { categoryUpdate } from "../../redux/shop/actions";

const CategoryEditModal = ({ show, onHide, editData, setEditData }) => {
  const { id, name, photo } = editData;
  const [editImage, setEditImage] = useState(null);
  const dispatch = useDispatch();

  // handleEditImage.
  const handleEditImage = (e) => {
    setEditImage(e.target.files[0]);
  };

  // handleCategoryFormSubmit.
  const handleCategoryFormSubmit = (e) => {
    e.preventDefault();

    // Init FormData.
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
    formData.append("productCategory_Photo", editImage);

    dispatch(categoryUpdate({ id, data: formData }));
    setEditData("");
    setEditImage(null);
    onHide();
  };

  // handleOnHide.
  const handleOnHide = () => {
    onHide();
    setEditImage(null);
  };
  return (
    <div className="edit_category_modal">
      <Modal show={show} onHide={handleOnHide} centered>
        <Modal.Header closeButton>Edit Category</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCategoryFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) =>
                  setEditData((prevstate) => ({
                    ...prevstate,
                    name: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Photo</Form.Label>
              <Form.Control
                type="file"
                name="productCategory_Photo"
                onChange={handleEditImage}
              />
            </Form.Group>
            {editImage ? (
              <img
                style={{ maxWidth: "100%" }}
                src={URL.createObjectURL(editImage)}
                alt=""
              />
            ) : (
              <img
                style={{ maxWidth: "100%" }}
                src={`http://localhost:5050/categoryPhoto/${photo}`}
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

export default CategoryEditModal;
