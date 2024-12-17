import React, { useState, useEffect } from 'react';
import Input from './components/input/input';
import Button from './components/button/index';
import Typography from './components/typography/typography';
import Accordion from './components/accordion/accordion';
import Tooltip from './components/tooltip/tooltip';

import './index.css';

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [search, setSearch] = useState('');

  
  const fetchData = async () => {
    const response = await fetch('https://api.coinlore.net/api/tickers/');
    const data = await response.json();
    setCryptos(data.data);
    setFilteredCryptos(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredCryptos(cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(query) || crypto.symbol.toLowerCase().includes(query)
    ));
  };

  return (
    <div className="app">
      <Typography variant="h1" className="title">Cryptocurrency Prices</Typography>
      <Button onClick={fetchData}>Update</Button>
      <Input value={search} onChange={handleSearch} placeholder="Search" />
      
      {filteredCryptos.map(crypto => (
        <Accordion key={crypto.id} title={crypto.name}>
          <Typography><strong>Symbol:</strong> {crypto.symbol}</Typography>
          <Typography><strong>Price USD:</strong> {crypto.price_usd}</Typography>
          <Typography><strong>Price BTC:</strong> {crypto.price_btc}</Typography>
          <Typography>
            <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
              <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
            </Tooltip>
          </Typography>
          <Typography style={{ color: crypto.percent_change_24h > 0 ? 'green' : 'red' }}>
            <strong>Percent Change 24H:</strong> {crypto.percent_change_24h}%
          </Typography>
        </Accordion>
      ))}
    </div>
  );
};

export default App;
