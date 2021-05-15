import React from "react";
import "./Front.css";
import {Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const Altcoin = () => {
  return (
    <div>
      <header className="AltcoinHead"></header>
      <Container>
        <Container class="hidden-spacer"> </Container>
        <Container>
          <Row>
            <Container class="col-12 mt-5">
              <h3 class="mt-5">What are Altcoins?</h3>
              <p>
                Altcoins are cryptocurrencies other than Bitcoin. They share
                characteristics with Bitcoin but are also different from them in
                other ways. For example, some altcoins use a different consensus
                mechanism to produce blocks or validate transactions. Or, they
                distinguish themselves from Bitcoin by providing new or
                additional capabilities, such as smart contracts or low-price
                volatility.
              </p>
              <p>
                "Altcoin" is a combination of the two words "alt" and "coin" and
                includes all alternatives to Bitcoin. The basic framework for
                Bitcoin and altcoins is similar. Thus, they share code and
                function as peer-to-peer systems or as a giant computer capable
                of processing large amounts of data and transactions at the same
                time. In some instances, altcoins also aspire to become the next
                Bitcoin by becoming an inexpensive method for digital
                transactions.
              </p>
              <p>
                Altcoins are alternative cryptocurrencies that were launched
                after the massive success achieved by Bitcoin.2 The term means
                alternative coins—that is—other than bitcoins. They were
                launched as enhanced substitutes of bitcoin with the claims to
                overcome some of the pain points of Bitcoin. Litecoin, Bitcoin
                Cash, Namecoin, and Dogecoin are common examples of altcoins.4
                Though each has tasted varying levels of success, none have
                managed to gain popularity akin to bitcoin.
              </p>
            </Container>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Altcoin;
