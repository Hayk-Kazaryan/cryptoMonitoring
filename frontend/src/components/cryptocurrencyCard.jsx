import Card from "antd/es/card/Card";
function CryptocurrencyCard() {


    return (
        <div>
            <Card
                title={
                    <div  >
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Bitcoin" />
                        <h3>Bitcoin</h3>
                    </div>
                }
                extra={<a href="#">More</a>}
                style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default CryptocurrencyCard
