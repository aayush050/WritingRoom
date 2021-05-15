import React from "react";
import "./Front.css";
import { Container, Row, Popover, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Front.css";

const Blockchain = () => {
  
  const popoverForBlockchain = (
    <Popover>
      <Popover.Content>
      Distributed ledger technology (DLT) is a digital system for recording the transaction of assets 
      in which the transactions and their details are recorded in multiple places at the same time. 
      Unlike traditional databases, distributed ledgers have no central data store or administration 
      functionality.
      </Popover.Content>
    </Popover>
  );

  return (
      <div>
          <header className="BlockchainHead"></header>
    <Container>
      <Container class="hidden-spacer"> </Container>
      <Container>
        <Row>
          <Container class="col-12 mt-5">
            <h3 class="mt-5">What is Blockchain?</h3>
            <p>
              Blockchain is a system of recording information in a way that
              makes it difficult or impossible to change, hack, or cheat the
              system.
            </p>
            <p>
              A blockchain is essentially a digital ledger of transactions that
              is duplicated and distributed across the entire network of
              computer systems on the blockchain. Each block in the chain
              contains a number of transactions, and every time a new
              transaction occurs on the blockchain, a record of that transaction
              is added to every participant’s ledger. The decentralised database
              managed by multiple participants is known as{" "}
              <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={popoverForBlockchain}
              >             
              <p variant="success" className="modalsInsidePage">
                Distributed Ledger Technology (DLT).
              </p>
              </OverlayTrigger>
            </p>
            <p>
              This means if one block in one chain was changed, it would be
              immediately apparent it had been tampered with. If hackers wanted
              to corrupt a blockchain system, they would have to change every
              block in the chain, across all of the distributed versions of the
              chain.
            </p>
            <h3>Why blockchain is important?</h3>
            <p>
              Business runs on information. The faster it’s received and the
              more accurate it is, the better. Blockchain is ideal for
              delivering that information because it provides immediate, shared
              and completely transparent information stored on an immutable
              ledger that can be accessed only by permissioned network members.
              A blockchain network can track orders, payments, accounts,
              production and much more. And because members share a single view
              of the truth, you can see all details of a transaction end-to-end,
              giving you greater confidence, as well as new efficiencies and
              opportunities.
            </p>
            <h3>Is Blockchain Secure?</h3>
            <p>
              Blockchain technology accounts for the issues of security and
              trust in several ways. First, new blocks are always stored
              linearly and chronologically. That is, they are always added to
              the “end” of the blockchain. If you take a look at Bitcoin’s
              blockchain, you’ll see that each block has a position on the
              chain, called a “height.”
            </p>

            <p>
              After a block has been added to the end of the blockchain, it is
              very difficult to go back and alter the contents of the block
              unless the majority reached a consensus to do so. That’s because
              each block contains its own hash, along with the hash of the block
              before it, as well as the previously mentioned time stamp. Hash
              codes are created by a math function that turns digital
              information into a string of numbers and letters. If that
              information is edited in any way, the hash code changes as well.
            </p>
            <p>
              Here’s why that’s important to security. Let’s say a hacker wants
              to alter the blockchain and steal Bitcoin from everyone else. If
              they were to alter their own single copy, it would no longer align
              with everyone else's copy. When everyone else cross-references
              their copies against each other, they would see this one copy
              stand out and that hacker's version of the chain would be cast
              away as illegitimate.
            </p>
            <p>
              Succeeding with such a hack would require that the hacker
              simultaneously control and alter 51% of the copies of the
              blockchain so that their new copy becomes the majority copy and
              thus, the agreed-upon chain. Such an attack would also require an
              immense amount of money and resources as they would need to redo
              all of the blocks because they would now have different timestamps
              and hash codes.
            </p>
            <p>
              Due to the size of Bitcoin’s network and how fast it is growing,
              the cost to pull off such a feat would probably be insurmountable.
              Not only would this be extremely expensive, but it would also
              likely be fruitless. Doing such a thing would not go unnoticed, as
              network members would see such drastic alterations to the
              blockchain. The network members would then fork off to a new
              version of the chain that has not been affected.
            </p>
            <p>
              This would cause the attacked version of Bitcoin to plummet in
              value, making the attack ultimately pointless as the bad actor has
              control of a worthless asset. The same would occur if the bad
              actor were to attack the new fork of Bitcoin. It is built this way
              so that taking part in the network is far more economically
              incentivized than attacking it.
            </p>
          </Container>
        </Row>
      </Container>
    </Container>
    </div>
  );
};

export default Blockchain;
