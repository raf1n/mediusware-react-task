import React, { useState } from "react";
import AllContactsModal from "./AllContactsModal";
import USContactsModal from "./USContactsModal";

const Problem2 = () => {
  const [showModal1, setShowModal1] = useState(false);

  const handleClose = () => setShowModal1(false);
  const handleShow = () => setShowModal1(true);

  const [showModal2, setShowModal2] = useState(false);

  const handleClose2 = () => setShowModal1(false);
  const handleShow2 = () => setShowModal1(true);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleShow}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleShow2}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
        <AllContactsModal
          show={showModal1}
          handleClose={handleClose}
          handleShow={handleShow}
        ></AllContactsModal>

        <USContactsModal
          show={showModal2}
          handleClose={handleClose2}
          handleShow={handleShow2}
        ></USContactsModal>
      </div>
    </div>
  );
};

export default Problem2;
