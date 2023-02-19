import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const Dashboard = (props) => {
  const stockData = props.stockData;
  
  const returnStocks = () => {
    return stockData.map((stock) => {
      return (
        <tr className='stock-tr' key={stock.symbol}>
          <td className='stock-name-cell'><Link to={`stock/${stock.symbol}`} className='link'>{stock.name} {stock.symbol}</Link></td>
          <td className='stock-price-cell'><Link to={`stock/${stock.symbol}`} className='link'>{stock.lastPrice}</Link></td>
          <td ><Link to={`stock/${stock.symbol}`} className={stock.change > 0 ? 'stock-change-cell-pos' : 'stock-change-cell-neg'}>{stock.change}</Link></td>
        </tr>
      )
    })
  }
  return (
    <div>
      <h1>Most Active Stocks</h1>
      <table>
        <tbody>
          <tr id='header-tr'>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
          {returnStocks()}
          </tbody>
      </table>
      
    </div>
  )
}

export default Dashboard