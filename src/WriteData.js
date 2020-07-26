import React, { Component } from 'react';
import Web3 from 'web3';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class WriteData extends Component {
    state = {
        symbol: '',
        price: 0,
        volume: 0,
        txId: null
    }

    handleChange = e => {
        this.setState({symbol: e.target.value});
    }
    handleClick = (e) => { 

        (async () => { e.preventDefault();
            const web3 = new Web3();
            const { drizzle, drizzleState } = this.props;
            const { symbol } = this.state;
            try {
                console.log(e.target.value);
                const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=JDBFC08ZB6G1EP3X`);
                const json = await response.json();
                this.setState({symbol: json["Global Quote"]["01. symbol"], 
                            price: json["Global Quote"]["05. price"], 
                            volume: json["Global Quote"]["06. volume"]});
                }
            catch (err) {
                console.log("fetch failed", err)
            }
            
            const StockOracle = drizzle.contracts.StockOracle;
            const txId = await StockOracle
                .methods['setStock']
                .cacheSend(
                    web3.utils.fromAscii(symbol), this.state.price*10000, this.state.volume,
                    {from:drizzleState.accounts[0]}
                    );
                    this.setState({txId});
          })();
        }
 

    render() {
        const { transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[this.state.txId];
        return (
            <div>
                <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Key in Equity Symbol. The Stock Price and Volume would gather from Oracle and Enter into SmartContract."
                            aria-label="Equity Symbol"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary" 
                            onClick={this.handleClick}>
                            Write into Smart Contract</Button>
                        </InputGroup.Append>
                        </InputGroup>
                        <div className="p-3 mb-2 bg-info text-white">{txHash ? `Transaction status: ${transactions[txHash] && 
                            transactions[txHash].status}` : null } </div>
            </div>
        )
    }

}


export default WriteData;