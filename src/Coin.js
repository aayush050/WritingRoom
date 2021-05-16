import React from "react";
import "./Coin.css";
import { Container, Row, Col } from "react-bootstrap";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Container>
      <Row>
        <Col className="separator">
          <img src={image} alt="crypto" />
          <h5 className="ml-2 mr-1">
            {name}
            <br />
            <p className="coin-symbol">({symbol})</p>
          </h5>
        </Col>

        <Col>
          <p className="coin-price">
            {/*&#x20B9;*/} ${price.toLocaleString()}
          </p>
        </Col>

       
          <Col>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </Col>
          <Col>
          <p className="coin-volume">
            {/*&#x20B9;*/} ${volume.slice(0, 2)}B
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Coin;
