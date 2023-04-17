import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar_area">
      <div className="sidebar_widget">
        <h3 className="widget_title">Search</h3>
        <hr />
        <input type="search" className="form-control" placeholder="Search..." />
      </div>
      <div className="sidebar_widget">
        <h3 className="widget_title">Categories</h3>
        <hr />
        <ul className="list_items">
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Women
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Kids
            </label>
          </li>
        </ul>
      </div>
      <div className="sidebar_widget">
        <h3 className="widget_title">Brands</h3>
        <hr />
        <ul className="list_items">
          <li>
            <label>
              <input type="checkbox" /> Apple
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Hp
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Linovo
            </label>
          </li>
        </ul>
      </div>
      <div className="sidebar_widget">
        <h3 className="widget_title">Tags</h3>
        <hr />
        <div className="tag_items">
          <Link to={"/"}>Eid</Link>
          <Link Link to={"/"}>
            Puja
          </Link>
          <Link to={"/"}>Corona</Link>
          <Link to={"/"}>Boishakh</Link>
        </div>
      </div>

      <div className="sidebar_widget">
        <h3 className="widget_title">Search-Price</h3>
        <hr />
        <div className="price_range">
          <input type="text" placeholder="Min" />
          <input type="text" placeholder="Max" />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
