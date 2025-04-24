import React, { useEffect, useState } from 'react';
import { Menu, Spin } from 'antd';
import axios from 'axios';
import CryptocurrencyCard from './components/cryptocurrencyCard';
import PriceChangeChart from './components/PriceChangeChart';

function getItems(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrencies = async () => {
    const res = await axios.get('/cryptocurrencies');
    const currenciesResponse = res.data;
    const menuItems = [
      getItems(
        "Կրիպտոարժույթների ցանկ",
        "g1",
        null,
        currenciesResponse.map(c => ({
          label: c.name,
          key: c.id.toString(),
        })),
        'group'
      ),
    ];
    setCurrencies(menuItems);
  };

  const fetchCurrency = async () => {
    const res = await axios.get(`/cryptocurrencies/${currencyId}`);
    setCurrencyData(res.data);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setCurrencyData(null);
    fetchCurrency();
  }, [currencyId]);

  const onClick = (e) => {
    setCurrencyId(e.key);
  };

  return (
    <div className="flex">
      <Menu
        onClick={onClick}
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ width: 256 }}
        items={currencies}
        className="h-screen overflow-scroll"
      />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className="mx-auto my-auto">
          {currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin size='larg' />}
        </div>

        <div style={{ width: '100%', padding: '2.5rem' }}>
          <PriceChangeChart quote={currencyData?.quote} />
        </div>
      </div>

    </div>
  );
};

export default App;
