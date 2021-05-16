import React from "react";
import "./Front.css";
import { Container, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";
import AccordionFunction from "./Accordian";

const Altcoin = () => {
  return (
    <div>
      <header className="AltcoinHead"></header>
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
              <p>
                <strong>
                  It is possible for an altcoin to fall into more than one
                  category.
                </strong>
              </p>

              <h3>Types of Altcoins</h3>
              <p>
                Depending on their functionalities and consensus mechanisms,
                altcoins come in various flavors and categories.
              </p>
              <AccordionFunction
                title="Mining-Based"
                body="As their name indicates, mining-based altcoins are mined into existence. Most mining-based altcoins use Proof-of-Work (PoW), a method in which systems generate new coins by solving difficult problems, to create blocks. Examples of mining-based altcoins are Litecoin, Monero, and Zcash. Most of the top altcoins in early 2020 fell into the mining-based category. The alternative to mining-based altcoins is pre-mined coins. Such coins are not produced through an algorithm but are distributed before they are listed in cryptocurrency markets. An example of a pre-mined coin is Ripple’s XRP."
              />
              <p></p>
              <AccordionFunction
                title="Stablecoins"
                body="A “stablecoin” is a type of cryptocurrency whose value is tied to an outside asset, such as the U.S. dollar or gold, to stabilize the price. Cryptocurrency trading and use have been marked by volatility since launch. Stablecoins aim to reduce this overall volatility by pegging their value to a basket of goods, such as fiat currencies, precious metals, or other cryptocurrencies. The basket is meant to act as a reserve to redeem holders if the cryptocurrency fails or faces problems. Price fluctuations for stablecoins are not meant to exceed a narrow range."
              />
            </Container>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Altcoin;
