import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const PriceChangeChart = ({ quote }) => {
    const priceHistory = [
        { day: '1h', change: quote?.USD?.percent_change_1h },
        { day: '24h', change: quote?.USD?.percent_change_24h },
        { day: '7d', change: quote?.USD?.percent_change_7d },
        { day: '30d', change: quote?.USD?.percent_change_30d },
        { day: '60d', change: quote?.USD?.percent_change_60d },
        { day: '90d', change: quote?.USD?.percent_change_90d },
    ];

    return (
        <div style={{ width: '100%', height: 350 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 16 }}>Գնի փոփոխություն (%)</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceHistory}>
                    <XAxis dataKey="day" />
                    <YAxis domain={['auto', 'auto']} tickFormatter={(val) => `${val}%`} />
                    <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                    <Line
                        type="monotone"
                        dataKey="change"
                        stroke="#1890ff"
                        strokeWidth={2}
                        dot={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceChangeChart;
