import React from "react";
import "./Front.css";
import {
  Container,
  Row
} from "react-bootstrap";

const Token = () => {
  return (
    <div>
      <header className="TokenHead"></header>
      <div fluid
        id="coinmarketcap-widget-marquee"
        coins="1,1027,825,1839,2010,74,52,6636,1831,7083,1975,512,4687,5994,8916,2,3408,3822,5864,3890,3077,1321,1772,7186,5034,2502,5426,1274,5161"
        currency="USD"
        theme="light"
        transparent="false"
        show-symbol-logo="true"
      ></div>
      <Container>
        <Container class="hidden-spacer"> </Container>
        <Container>
          <Row>
            <Container class="col-12 mt-5">
              <h3 class="mt-5">What are Crypto tokens?</h3>
              <p>
                The term crypto token refers to a special virtual currency token
                or how cryptocurrencies are denominated. These tokens represent
                fungible and tradable assets or utilities that reside on their
                own blockchains. Crypto tokens are often used to fundraise for
                crowd sales, but they can also be used as a substitute for other
                things. These tokens are usually created, distributed, sold, and
                circulated through the standard initial coin offering (ICO)
                process, which involves a crowdfunding exercise to fund project
                development.
              </p>
              <p>
                Tokens are created through an initial coin offering, which
                represents the cryptocurrency version of an initial public
                offering (IPO). Tokens are created by cryptocurrency companies
                that want to raise money. Investors who are interested in the
                company can purchase these tokens.
              </p>
              <p>
                Investors can use crypto tokens for any number of reasons. They
                can hold onto them to represent a stake in the cryptocurrency
                company or for an economic reason—to trade or make purchases of
                goods and services.
              </p>
            </Container>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Token;
