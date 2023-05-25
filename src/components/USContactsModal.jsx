import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function USContactsModal({
  show1,
  setShow,
  handleClose1,
  handleShow1,
  show2,
  setShow2,
  handleClose2,
  handleShow2,
}) {
  const [usContactData, setUSContactData] = useState([]);

  useEffect(() => {
    const handleUSCountriesData = () => {
      var myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append(
        "X-CSRFToken",
        "SSNrTU6VISIi3B7Z2vXHNygTeHXxIKn9PV6GXLFaPAkqMZJUBAutV5TEyirKhpI0"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setUSContactData(result.results))
        .catch((error) => console.log("error", error));
    };
    handleUSCountriesData();
  }, []);

  const handleAllContactShow = async () => {
    await handleClose2();
    await handleShow1();
  };

  return (
    <>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>US Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usContactData?.map((dt, id) => {
            return <p key={id}>{dt.phone}</p>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAllContactShow}>
            All Contacts
          </Button>
          <Button variant="secondary" onClick={handleShow2}>
            US Contacts
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
        <Modal.Footer style={{ display: "flex", justifyContent: "flex-start" }}>
          <Form.Check aria-label="option 1" label="Only Even" />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default USContactsModal;
