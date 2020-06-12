import React, { Component } from 'react';
import Web3 from 'web3';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

//Read Stock Price and Stock Volume from Smart Contract.
class ReadData extends Component {
    state = {
        dataKey: '',
        symbol: ''
    }

handleChange = e => {
    this.setState({symbol: e.target.value});
}

handleClick = e => {
    e.preventDefault();
    const web3 = new Web3();
    const { symbol } = this.state;
    const Storage = this.props.drizzle.contracts.Storage;
    const dataKey = Storage.methods['getStockPrice'].cacheCall(web3.utils.fromAscii(symbol));
    this.setState({dataKey});
    const dataKey2 = Storage.methods['getStockVolume'].cacheCall(web3.utils.fromAscii(symbol));
    this.setState({dataKey2});
}

render() {
    const { Storage } = this.props.drizzleState.contracts;
    const { dataKey } = this.state;
    const { dataKey2 } = this.state;
    const price = Storage.getStockPrice[dataKey];
    const volume = Storage.getStockVolume[dataKey2];
    return (
        <div>

<InputGroup className="mb-3">
                        <FormControl
                            placeholder="Key in Equity Symbol. The Stock Price and Volume will be retrieve from Smart Contract"
                            aria-label="Equity Symbol"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary" 
                            onClick={this.handleClick}>
                            Read from Smart Contract</Button>
                        </InputGroup.Append>
                        </InputGroup>
                        <Button variant="outline-success">Stock Symbol is: <b>{this.state.symbol}</b></Button> 
                        <Button variant="outline-success">Stock Price is: <b>{price && price.value/10000}</b></Button> 
                        <Button variant="outline-success">Stock Volume is: <b>{volume && volume.value}</b></Button>
                    </div>
                );
            }
            }

export default ReadData;
