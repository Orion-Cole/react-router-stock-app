import React from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

const Stock = (props) => {
  let singleStock;
    let { symbol } = useParams()
    const stockData = props.stockData;
    
       stockData.forEach(stock => {
        if (stock.symbol == symbol) {
          singleStock = stock
        }
      });
    

  return (
    <div>
      <div id='stock-stats-container'>
        <div id='stock-stats'>
          <h1><u>Stock: {singleStock.name} ({singleStock.symbol})</u></h1>
          <h2>Last Price: {singleStock.lastPrice}</h2>
          <h2>Change: {singleStock.change}</h2>
          <h2>High: {singleStock.high}</h2>
          <h2>Low: {singleStock.low}</h2>
          <h2>Open: {singleStock.open}</h2>
        </div>
      </div>

    </div>
  )
}

export default Stock