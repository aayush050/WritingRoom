import React from 'react'
import {Card, Accordion} from 'react-bootstrap';
const AccordionFunction = ({title, body}) => {
    return (
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      {title}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{body}</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
}

export default AccordionFunction
