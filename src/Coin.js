import React from "react";
import "./Coin.css";

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
    //   {/* <Container>
    //   <Row>
    //     <Col className="separator">
    //       <img src={image} alt="crypto" />
    //       <h5 className="ml-2 mr-1">
    //         {name}
    //         <br />
    //         <p className="coin-symbol">({symbol})</p>
    //       </h5>
    //     </Col>

    //     <Col>
    //       <p className="coin-price">
    //         {/*&#x20B9;*/}
    //   {/* </p>
    //     </Col>

       
    //       <Col>
    //         {priceChange < 0 ? (
    //           <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    //         ) : (
    //           <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
    //         )}
    //       </Col>
    //       <Col>
    //       <p className="coin-volume">
    //         // {/*&#x20B9;*/}
    //   {/* </p>
    //     </Col>
    //   </Row>
    // </Container> */}
          <tr>
            <td className="separator">
              <img src={image} alt="crypto" />
              <h5 className="ml-2 mr-1">
                {name}
                <br />
                <p className="coin-symbol">({symbol})</p>
              </h5>
            </td>
            <td colSpan="2">
              {" "}
              <p className="coin-price">
                {/*&#x20B9;*/} ${price.toLocaleString()}
              </p>
            </td>
            <td colSpan="2">
              {priceChange < 0 ? (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
              ) : (
                <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
              )}
            </td> 
            <td colSpan="2">
              <p className="coin-volume">
                {/*&#x20B9;*/} ${volume.slice(0, 2)}B
              </p>
            </td>
          </tr>
  );
};

export default Coin;
