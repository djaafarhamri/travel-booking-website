import React from "react";
import "../styles/search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line" />
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line" />
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m" />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line" />
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" />
            </div>
          </FormGroup>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
