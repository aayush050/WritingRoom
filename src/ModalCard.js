import React from "react";
import {Link} from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";

const ModalCard = ({ title, description}) => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalCard;
