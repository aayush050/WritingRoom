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
const Home = () => {
  return (
    <div>
      <header className="head"></header>
      <Container>
        <Container class="hidden-spacer"> </Container>
        <Container>
          <Row>
            <Container class="col-12 mt-5">
              <h3 class="mt-5">What is cryptocurrency?</h3>
              <p>
                A cryptocurrency is a digital or virtual currency that is
                secured by cryptography, which makes it nearly impossible to
                counterfeit or double-spend. Many cryptocurrencies are
                decentralized networks based on{" "}
                <Link className="linksInsidePage" to="/blockchain">
                  blockchain
                </Link>{" "}
                technology—a distributed ledger enforced by a disparate network
                of computers. A defining feature of cryptocurrencies is that
                they are generally not issued by any central authority,
                rendering them theoretically immune to government interference
                or manipulation.
              </p>
              <p>
                A cryptocurrency is a form of digital asset based on a network
                that is distributed across a large number of computers. This
                decentralized structure allows them to exist outside the control
                of governments and central authorities.
              </p>
              <p>
                Cryptocurrencies are systems that allow for secure payments
                online which are denominated in terms of virtual "tokens," which
                are represented by ledger entries internal to the system.
                "Crypto" refers to the various encryption algorithms and
                cryptographic techniques that safeguard these entries, such as
                elliptical curve encryption, public-private key pairs, and
                hashing functions.
              </p>
              <p>
                Cryptocurrency is decentralized digital money, based on
                blockchain technology. You may be familiar with the most popular
                versions, Bitcoin and Ethereum, but there are more than 5,000
                different cryptocurrencies in circulation, according to
                CoinLore.
              </p>
              <p>
                Decentralized cryptocurrency is produced by the entire
                cryptocurrency system collectively, at a rate which is defined
                when the system is created and which is publicly known. In
                centralized banking and economic systems such as the Federal
                Reserve System, corporate boards or governments control the
                supply of currency by printing units of fiat money or demanding
                additions to digital banking ledgers. In the case of
                decentralized cryptocurrency, companies or governments cannot
                produce new units, and have not so far provided backing for
                other firms, banks or corporate entities which hold asset value
                measured in it. The underlying technical system upon which
                decentralized cryptocurrencies are based was created by the
                group or individual known as Satoshi Nakamoto.
              </p>
              <h3>What is Cryptocurrency Mining?</h3>
              <p>
                Mining in the crypto world is the process of keeping blockchain
                data in check. It involves hard work (done by computers) and
                results in a slow accumulation of resources – just like mining
                for minerals.</p>
                <p>
                  Cryptocurrency mining is painstaking, costly, and only
                  sporadically rewarding. Nonetheless, mining has a magnetic
                  appeal for many investors interested in cryptocurrency because
                  of the fact that miners are rewarded for their work with
                  crypto tokens.
                </p>
                <p>
                  Anyone can become a miner, but mining is not for everyone.
                  Over 70% of Bitcoin mining happens in China, where dirt cheap
                  electricity makes running mining computers extremely
                  profitable.
                </p>
                <p>
                  In cryptocurrency networks, mining is a validation of
                  transactions. For this effort, successful miners obtain new
                  cryptocurrency as a reward. The reward decreases transaction
                  fees by creating a complementary incentive to contribute to
                  the processing power of the network. The rate of generating
                  hashes, which validate any transaction, has been increased by
                  the use of specialized machines such as FPGAs and ASICs
                  running complex hashing algorithms like SHA-256 and scrypt.
                </p>
                <h3>Categorization Of Cryptocurrencies</h3>
                <p>
                  It is important to note that all coins or tokens are regarded
                  as cryptocurrencies, even if most of the coins do not function
                  as a currency or medium of exchange.
                </p>
                <p>
                  All these characteristics are inherent within Bitcoin, and
                  since the cryptocurrency space was kickstarted by Bitcoin’s
                  creation, any other coins conceived after Bitcoin is generally
                  considered as a cryptocurrency, though most do not fulfill the
                  aforementioned characteristics of an actual currency.
                </p>
                <p>The most common categorization of cryptocurrencies are:</p>
                <p>
                  1.{" "}
                  <Link className="linksInsidePage" to="/altcoin">
                    Altcoins
                  </Link>{" "}
                  (Alternative Cryptocurrency Coins)
                </p>
                <p>
                  2.{" "}
                  <Link className="linksInsidePage" to="/token">
                    Crypto Tokens
                  </Link>
                </p>
                <h3>Coins VS Tokens</h3>
                <p>
                  Coins are native to their own blockchain. Whilst tokens have
                  been built on top of another blockchain, like Ethereum, NEO,
                  or Waves.
                </p>
                <p>
                  Coins are most often used simply as money; however, some coins
                  do have other uses. These include being used to fuel
                  applications, being used as a stake to validate a transaction
                  on a network, or being used to fuel smart contract and token
                  transactions.
                </p>
                <p>
                  Meanwhile, tokens serve a different purpose. If they were
                  created to be used on a dApp(Decentralized Applications), then
                  their purpose will depend on the application itself. In some
                  cases, they are for features such as voting rights. In other
                  cases, they are used for transactions on the dApp (like Civic)
                  or to reward the users with things like discounted fees, etc.
                  (like Binance).
                </p>
            </Container>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
