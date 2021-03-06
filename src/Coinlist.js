import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Coinlist.css";
import Coin from "./Coin";
import {Table } from "react-bootstrap";
const Coinlist = () => {
  const [coins, setCoins] = useState([]);
  const [search] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [coins]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <header className="CoinMarketHead"></header>
      <h1 className="coin-text mt-5 mb-5">Live Crypto Market Price</h1>
      <div className="containerMarket">
      <Table responsive borderless >
        <thead> 
          <tr rowspan="2">
            <th className="alignName">Coin Name</th>
            <th colSpan="2">Price</th>
            <th colSpan="2">Change</th>
            <th colSpan="2" >Volume</th>
          </tr>
        </thead>
        <tbody >
              {filteredCoins.map((coin) => {
                return (

                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume.toLocaleString()}
                    volume={coin.market_cap.toLocaleString()}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                 
                );
              })}
            
        </tbody>
      </Table>
      </div>
      {/* <Container className="containerMarket mt-5">
        <Row>
          <Col>
            <h1 className="coin-text">Some famous cryptocurrency</h1>
          </Col>
        </Row>
        <Row  className="mb-4 mt-5">
          <Col><strong>Name</strong></Col>
          <Col><strong>Price</strong></Col>
          <Col><strong>Change</strong></Col>
          <Col><strong>Volume</strong></Col>
        </Row>
        <p></p>
        <Row>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume.toLocaleString()}
                volume={coin.market_cap.toLocaleString()}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </Row>
        <p></p>
      </Container> */}
    </div>
  );
};

export default Coinlist;
