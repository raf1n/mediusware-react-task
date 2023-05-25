import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AllContactsModal({
  show1,
  setShow,
  handleClose1,
  handleShow1,
  show2,
  setShow2,
  handleClose2,
  handleShow2,
}) {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    const handleAllCountriesData = () => {
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

      fetch("https://contact.mediusware.com/api/contacts/", requestOptions)
        .then((response) => response.json())
        .then((result) => setContactData(result.results))
        .catch((error) => console.log("error", error));
    };
    handleAllCountriesData();
  }, []);

  const handleUsContactShow = async () => {
    await handleClose1();
    await handleShow2();
  };

  return (
    <>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>All Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contactData?.map((dt, id) => {
            return <p key={id}>{dt.phone}</p>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ color: "#46139f" }}
            variant="outline-primary"
            onClick={handleShow1}
          >
            All Contacts
          </Button>
          <Button
            style={{ color: "#ff7f50" }}
            variant="outline-primary"
            onClick={handleUsContactShow}
          >
            US Contacts
          </Button>
          <Button
            style={{ color: "#46139f" }}
            variant="outline-primary"
            onClick={handleClose1}
          >
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

export default AllContactsModal;
