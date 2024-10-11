import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    function fetchStocks() {
      return fetch("http://localhost:3001/stocks");
    }
    fetchStocks()
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  const addToPortfolio = (stockToAdd) => {
    if (!portfolio.some((stock) => stock.id === stockToAdd.id)) {
      setPortfolio([...portfolio, stockToAdd]);
    }
  };

  const removeFromPortfolio = (stockObj) => {
    // console.log("🚀 ~ removeFromPortfolio ~ stockObj:", stockObj);
    setPortfolio(portfolio.filter((stock) => stock.id !== stockObj.id))
  };

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            onClickStock={addToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onClickStock={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
