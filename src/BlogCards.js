import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
const BlogCards = ({ title, description, link }) => {
  return (
    <div>
      <Card className="text-center"  border="light" style={{ width: "18rem", height: "15rem"}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to ={link}><Button variant="outline-dark">Read More</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCards;
