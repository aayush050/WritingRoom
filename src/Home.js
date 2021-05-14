import React from "react";
import "./Front.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container>
      <Container class="hidden-spacer"> </Container>
      <Container>
        <Row>
          <Container class="col-12 mt-5">
            <h3 class="mt-5">What is cryptocurrency?</h3>
            <p>
              A cryptocurrency is a digital or virtual currency that is secured
              by cryptography, which makes it nearly impossible to counterfeit
              or double-spend. Many cryptocurrencies are decentralized networks
              based on{" "}
              <Link className="linksInsidePage" to="/blockchain">
                blockchain
              </Link>{" "}
              technology—a distributed ledger enforced by a disparate network of
              computers. A defining feature of cryptocurrencies is that they are
              generally not issued by any central authority, rendering them
              theoretically immune to government interference or manipulation.
            </p>
            <p>
              A cryptocurrency is a form of digital asset based on a network
              that is distributed across a large number of computers. This
              decentralized structure allows them to exist outside the control
              of governments and central authorities.
            </p>
            <p>
              Cryptocurrencies are systems that allow for secure payments online
              which are denominated in terms of virtual "tokens," which are
              represented by ledger entries internal to the system. "Crypto"
              refers to the various encryption algorithms and cryptographic
              techniques that safeguard these entries, such as elliptical curve
              encryption, public-private key pairs, and hashing functions.
            </p>
            <p>
              Cryptocurrency is decentralized digital money, based on blockchain
              technology. You may be familiar with the most popular versions,
              Bitcoin and Ethereum, but there are more than 5,000 different
              cryptocurrencies in circulation, according to CoinLore.
            </p>
            <p>
              Decentralized cryptocurrency is produced by the entire
              cryptocurrency system collectively, at a rate which is defined
              when the system is created and which is publicly known. In
              centralized banking and economic systems such as the Federal
              Reserve System, corporate boards or governments control the supply
              of currency by printing units of fiat money or demanding additions
              to digital banking ledgers. In the case of decentralized
              cryptocurrency, companies or governments cannot produce new units,
              and have not so far provided backing for other firms, banks or
              corporate entities which hold asset value measured in it. The
              underlying technical system upon which decentralized
              cryptocurrencies are based was created by the group or individual
              known as Satoshi Nakamoto.
            </p>
            <h3>What is Cryptocurrency Mining?</h3>
            <p>
              Mining in the crypto world is the process of keeping blockchain
              data in check. It involves hard work (done by computers) and
              results in a slow accumulation of resources – just like mining for
              minerals.
              <p>
                Cryptocurrency mining is painstaking, costly, and only
                sporadically rewarding. Nonetheless, mining has a magnetic
                appeal for many investors interested in cryptocurrency because
                of the fact that miners are rewarded for their work with crypto
                tokens.
              </p>
              <p>
                Anyone can become a miner, but mining is not for everyone. Over
                70% of Bitcoin mining happens in China, where dirt cheap
                electricity makes running mining computers extremely profitable.
              </p>
              <p>
                In cryptocurrency networks, mining is a validation of
                transactions. For this effort, successful miners obtain new
                cryptocurrency as a reward. The reward decreases transaction
                fees by creating a complementary incentive to contribute to the
                processing power of the network. The rate of generating hashes,
                which validate any transaction, has been increased by the use of
                specialized machines such as FPGAs and ASICs running complex
                hashing algorithms like SHA-256 and scrypt.
              </p>
              <h3>Categorization Of Cryptocurrencies</h3>
            </p>
          </Container>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
