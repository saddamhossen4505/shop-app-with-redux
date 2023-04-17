import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";
import { Button, Form, Table } from "react-bootstrap";
import BrandModal from "./BrandModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, updateBrandStatus } from "../../redux/shop/actions";
import swal from "sweetalert";
import BrandEditModal from "./BrandEditModal";

const Brands = () => {
  // Create & Edit Brand Modal
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const { brands } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  // handleBrandDelete.
  const handleBrandDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal("File deleted success!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  // handleStatusUpdate.
  const handleStatusUpdate = (id, status) => {
    dispatch(updateBrandStatus({ id, status: !status }));
  };

  // handleEditBrandData.
  const handleEditBrandData = (id, name, photo) => {
    setEditModal(true);
    setEditData({
      id,
      name,
      photo,
    });
  };
  return (
    <div className="brands_page">
      <BrandModal
        show={modal}
        setModal={setModal}
        onHide={() => setModal(false)}
      />
      <BrandEditModal
        show={editModal}
        onHide={() => setEditModal(false)}
        editData={editData}
        setEditData={setEditData}
      />
      <div className="table_content">
        <div className="table_content_header">
          <h2 className="table_titel">Brands</h2>
          <button onClick={() => setModal(true)}>
            <div className="icon">
              <AiOutlinePlus />
            </div>
            Add New Brand
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
              {brands.map(({ name, photo, _id, status }, index) => {
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
                          onChange={() => handleStatusUpdate(_id, status)}
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
                        src={`http://localhost:5050/brandsPhoto/${photo}`}
                        alt=""
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() => handleEditBrandData(_id, name, photo)}
                        className="btn-sm"
                        variant="warning"
                      >
                        <FiEdit />
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => handleBrandDelete(_id)}
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

export default Brands;
