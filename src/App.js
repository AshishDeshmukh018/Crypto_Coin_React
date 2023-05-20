import React, { useEffect, useState } from 'react';
import TableRow from './Components/TableRow';
import './Styles.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const coins = await response.json();
        setData(coins);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Crypto Coins</h1>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <TableRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
