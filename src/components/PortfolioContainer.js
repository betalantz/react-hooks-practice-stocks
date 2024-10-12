import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onClickStock }) {
  const stockCards = portfolio.map((stock) => (
    <Stock
      key={stock.id}
      stock={stock}
      onClickStock={onClickStock} // we pass down this function with a generic name in props to improve the Stock components reusability
    />
  ));
  return (
    <div>
      <h2>My Portfolio</h2>
      {stockCards}
    </div>
  );
}

export default PortfolioContainer;
