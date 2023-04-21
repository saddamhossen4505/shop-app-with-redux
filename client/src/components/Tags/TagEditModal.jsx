import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTag } from "../../redux/shop/actions";

const TagEditModal = ({ show, onHide, editData, setEditData }) => {
  const { id, name } = editData;
  const dispatch = useDispatch();

  // handleEditTagSubmit.
  const handleEditTagSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateTag({
        id,
        name,
      })
    );
    setEditData("");
    onHide();
  };
  return (
    <div className="edit_tag_modal">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>Edit Tag</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditTagSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tag Name</Form.Label>
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

            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TagEditModal;
