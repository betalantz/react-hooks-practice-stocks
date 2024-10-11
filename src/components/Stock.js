import React from "react";

function Stock({stock, onClickStock}) {

  const {name, price, ticker} = stock

  const handleClick = () => {
    onClickStock(stock)
  }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + ": " + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
