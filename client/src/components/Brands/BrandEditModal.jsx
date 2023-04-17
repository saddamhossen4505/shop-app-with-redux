import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateBrand } from "../../redux/shop/actions";

const BrandEditModal = ({ show, onHide, editData, setEditData }) => {
  const { id, name, photo } = editData;
  const [editImage, setEditImage] = useState(null);

  const dispatch = useDispatch();

  // handleEditBrandPhoto.
  const handleEditBrandPhoto = (e) => {
    setEditImage(e.target.files[0]);
  };

  // handleOnHide.
  const handleOnHide = () => {
    onHide();
    setEditImage(null);
  };

  // handleBrandUpdate.
  const handleBrandUpdate = (e) => {
    e.preventDefault();

    // Init formData.
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
    formData.append("productBrand_Photo", editImage);

    dispatch(updateBrand({ id, data: formData }));
    setEditData("");
    setEditImage(null);
    onHide();
  };

  return (
    <div className="edit_brand_modal">
      <Modal show={show} onHide={handleOnHide} centered>
        <Modal.Header closeButton>Edit Brand</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBrandUpdate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand Name</Form.Label>
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
              <Form.Label>Brand Photo</Form.Label>
              <Form.Control
                type="file"
                name="productBrand_Photo"
                onChange={handleEditBrandPhoto}
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
                src={`http://localhost:5050/brandsPhoto/${photo}`}
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

export default BrandEditModal;
