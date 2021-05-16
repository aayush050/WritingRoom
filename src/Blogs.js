import React from "react";
import "./Blogs.css";
import { CardColumns } from "react-bootstrap";
import BlogCards from "./BlogCards";
const Blogs = () => {
  return (
    <div>
            <header className="BlogHead"></header>
    <div className="container-fluid justify-content-center ml-5">
      <CardColumns className="mt-5 ml-4">
        <BlogCards title="Cryptocurrency" description="A cryptocurrency is a digital or virtual currency..." link="/" />
        <br />
        <BlogCards title="Blockchain" description="It is essentially a digital ledger of transactions..." link ="/blockchain" />
        <br />
        <BlogCards title="Altcoins" description="The term crypto token refers to a special virtual currency..." link="/altcoin"/>
        <br />
      </CardColumns>
      <CardColumns className="mb-5 ml-4">
        <BlogCards title="Tokens" description="Altcoins are alternative cryptocurrencies..." link="/token"/>
        <br />
        <BlogCards title="Coin Market" description="List of coins in the market and their prices.." link="/coins"/>
        <br />
        <BlogCards title="Cryptocurrency" description="Virtual coins" />
        <br />
      </CardColumns>
    </div>
    </div>
  );
};

export default Blogs;
