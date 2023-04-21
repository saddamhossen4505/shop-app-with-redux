import React, { useState } from "react";
import "./Categories.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Form, Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";
import CreateCategoryModal from "./CreateCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, updateStatus } from "../../redux/shop/actions";
import CategoryEditModal from "./CategoryEditModal";
import swal from "sweetalert";

const Categories = () => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const { categories } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  // handleCategoryStatus.
  const handleCategoryStatus = (id, status) => {
    dispatch(
      updateStatus({
        id,
        status: !status,
      })
    );
  };

  // handleEditCategory.
  const handleEditCategory = (id, name, photo) => {
    setEditModal(true);
    setEditData({
      id,
      name,
      photo,
    });
  };

  // handleDeleteCategory.
  const handleDeleteCategory = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategory(id));
        swal("File deleted success!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  return (
    <div className="categories_page">
      <div className="table_content">
        <CreateCategoryModal
          show={modal}
          onHide={() => setModal(false)}
          setModal={setModal}
        />
        <CategoryEditModal
          show={editModal}
          onHide={() => setEditModal(false)}
          editData={editData}
          setEditData={setEditData}
        />
        <div className="table_content_header">
          <h2 className="table_titel">Category</h2>
          <button onClick={() => setModal(true)}>
            <div className="icon">
              <AiOutlinePlus />
            </div>
            Add New Category
          </button>
        </div>
        <div className="table_content_list">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(({ name, status, photo, _id }, index) => {
                return (
                  <tr className="align-middle" key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=""
                          checked={status}
                          onChange={() => handleCategoryStatus(_id, status)}
                        />
                      </Form>
                    </td>
                    <td>
                      <img
                        style={{
                          width: "35px",
                          height: "35px",
                          objectFit: "cover",
                        }}
                        src={`http://localhost:5050/categoryPhoto/${photo}`}
                        alt=""
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() => handleEditCategory(_id, name, photo)}
                        className="btn-sm"
                        variant="warning"
                      >
                        <FiEdit />
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => handleDeleteCategory(_id)}
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

export default Categories;
