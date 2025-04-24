import React from 'react';
import { Card } from 'antd';
import PriceChangeChart from './PriceChangeChart';

const CryptocurrencyCard = ({ currency }) => {
    if (!currency) return <div className="text-gray-500">Loading...</div>;

    const iconUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`;

    return (
        <div className="w-full flex flex-col items-center gap-4 px-8">
            <Card
                title={
                    <div className="flex items-center gap-2">
                        <img src={iconUrl} alt={currency.name} width={32} />
                        <span>{currency.name} ({currency.symbol})</span>
                    </div>
                }
                style={{ width: 400 }}
            >
                <p><strong>Գին:</strong> ${currency.quote?.USD?.price?.toFixed(2)}</p>
                <p><strong>Շուկայական կապիտալ.:</strong> ${Math.round(currency.quote?.USD?.market_cap / 1e9)}B</p>
                <p><strong>Ռանգ:</strong> #{currency.cmc_rank}</p>
                <p><strong>թողարկման սահմ.:</strong> {currency.max_supply?.toLocaleString() || '∞'}</p>
            </Card>

        </div>
    );
};

export default CryptocurrencyCard;
