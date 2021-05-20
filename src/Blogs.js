import React from "react";
import { CardColumns } from "react-bootstrap";
import BlogCards from "./BlogCards";
const Blogs = () => {
  return (
    <div>
      <header className="BlogHead"></header>
      <div
        id="coinmarketcap-widget-marquee"
        coins="1,1027,825,1839,2010,74,52,6636,1831,7083,1975,512,
        4687,5994,8916,2,3408,3822,5864,3890,3077,1321,1772,7186,5034,2502,5426,1274,5161"
        currency="USD"
        theme="light"
        transparent="false"
        show-symbol-logo="true"
      ></div>
      <div className="container-fluid justify-content-center">
        <div className="ml-5">
        <CardColumns className="mt-5 ml-5">
          <BlogCards
            title="Cryptocurrency"
            description="A cryptocurrency is a digital or virtual currency..."
            link="/"
          />
          <br />
          <BlogCards
            title="Blockchain"
            description="It is essentially a digital ledger of transactions..."
            link="/blockchain"
          />
          <br />
          <BlogCards
            title="Altcoins"
            description="The term crypto token refers to a special virtual currency..."
            link="/altcoin"
          />
          <br />
        </CardColumns>
        <CardColumns className="mb-5 ml-5">
          <BlogCards
            title="Tokens"
            description="Altcoins are alternative cryptocurrencies..."
            link="/token"
          />
          <br />
          <BlogCards
            title="Coin Market"
            description="List of coins in the market and their prices..."
            link="/coins"
          />
          <br />
          <BlogCards
            title="Platforms"
            description="Platforms for trading and investing in india..."
            link="/platforms"
          />
          <br />
        </CardColumns>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
