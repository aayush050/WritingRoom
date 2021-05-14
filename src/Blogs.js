import React from "react";
import "./Blogs.css";
import { Card, CardColumns } from "react-bootstrap";
import BlogCards from "./BlogCards";
const Blogs = () => {
  return (
    <div className="container-fluid justify-content-center ml-5">
      <CardColumns className="mt-5 ml-4">
        <BlogCards title="Cryptocurrency" description="A cryptocurrency is a digital or virtual currency..." link="/" />
        <br />
        <BlogCards title="Blockchain" description="It is essentially a digital ledger of transactions.." link ="/blockchain" />
        <br />
        <BlogCards title="Cryptocurrency" description="Virtual coins" />
        <br />
      </CardColumns>
      <CardColumns className="mb-5 ml-4">
        <BlogCards title="Cryptocurrency" description="Virtual coins" />
        <br />
        <BlogCards title="Cryptocurrency" description="Virtual coins" />
        <br />
        <BlogCards title="Cryptocurrency" description="Virtual coins" />
        <br />
      </CardColumns>
    </div>
  );
};

export default Blogs;