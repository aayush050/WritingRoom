import React from "react";
import "./Front.css";
import {
  Container,
  Row,
  Popover,
  Button,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Token = () => {
  return (
    <div>
      <header className="TokenHead"></header>
      <Container>
        <Container class="hidden-spacer"> </Container>
        <Container>
          <Row>
            <Container class="col-12 mt-5">
              <h3 class="mt-5">What are Crypto tokens??</h3>
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
