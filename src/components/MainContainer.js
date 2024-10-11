import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech")

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

  const stocksToDisplay = [...stocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.name.localeCompare(b.name)
    } else {
      return a.price - b.price
    }
  })

  return (
    <div>
      <SearchBar sortBy={sortBy} onChangeSort={setSortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocksToDisplay}
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
