import StockOracle from './contracts/StockOracle.json';
const options = {
    contracts: [StockOracle],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:9545",
        },
    }
};

export default options;
