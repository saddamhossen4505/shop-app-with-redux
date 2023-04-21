import React, { useState } from "react";
import "./Tags.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Form, Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";
import TagModal from "./TagModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTag, updateTagStatus } from "../../redux/shop/actions";
import TagEditModal from "./TagEditModal";
import swal from "sweetalert";

const Tags = () => {
  // Create Modal.
  const [tagModal, setTagModal] = useState(false);
  const [tagEditModal, setTagEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const { tags } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  // handleUpdateTagStatus.
  const handleUpdateTagStatus = (id, status) => {
    dispatch(updateTagStatus({ id, status: !status }));
  };

  // handleEditData.
  const handleEditData = (id, name) => {
    setTagEditModal(true);
    setEditData({ id, name });
  };

  // handleDeleteTag.
  const handleDeleteTag = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTag({ id }));
        swal("File deleted success!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  return (
    <div className="tags_page">
      <div className="table_content">
        <TagModal
          show={tagModal}
          onHide={() => setTagModal(false)}
          setTagModal={setTagModal}
        />
        <TagEditModal
          show={tagEditModal}
          onHide={() => setTagEditModal(false)}
          editData={editData}
          setEditData={setEditData}
        />
        <div className="table_content_header">
          <h2 className="table_titel">Tags</h2>
          <button onClick={() => setTagModal(true)}>
            <div className="icon">
              <AiOutlinePlus />
            </div>
            Add New Tag
          </button>
        </div>
        <div className="table_content_list">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tags.map(({ name, slug, status, _id }, index) => {
                return (
                  <tr className="align-middle" key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{slug}</td>
                    <td>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=""
                          checked={status}
                          onChange={() => handleUpdateTagStatus(_id, status)}
                        />
                      </Form>
                    </td>
                    <td>
                      <Button
                        className="btn-sm"
                        variant="warning"
                        onClick={() => handleEditData(_id, name)}
                      >
                        <FiEdit />
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => handleDeleteTag(_id)}
                        className="btn-sm"
                        variant="danger"
                      >
                        <VscTrash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Tags;
