import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onClickStock }) {
  const stockCards = stocks.map((stock) => (
    <Stock
      key={stock.id}
      stock={stock}
      onClickStock={onClickStock}
    />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
