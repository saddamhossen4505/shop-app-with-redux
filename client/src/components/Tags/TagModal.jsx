import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createTag } from "../../redux/shop/actions";

const TagModal = ({ show, onHide, setTagModal }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // handleCreateTag.
  const handleCreateTag = (e) => {
    e.preventDefault();

    dispatch(
      createTag({
        name: input,
      })
    );
    setInput("");
    setTagModal(false);
  };

  return (
    <div className="create_tag_modal">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>Add New Tag</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateTag}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tag Name</Form.Label>
              <Form.Control
                value={input}
                onChange={(e) => setInput(e.target.value)}
                name="name"
                type="text"
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

export default TagModal;
