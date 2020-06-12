// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;


contract StockOracle {

    //quote structure

struct stock {
    uint price;
    uint volume;
}

//quotes by symbol

mapping ( bytes4 => stock) stockQuote;

//contract owner
address oracleOwner;

constructor () public {
   oracleOwner = msg.sender;
    }

//set the value of a stock.

function setStock(bytes4 symbol, uint _price, uint _volume) public {
    require(oracleOwner == msg.sender, 'Only Owner can Input the Data');
    stock memory newStock;
    newStock.price = _price;
    newStock.volume = _volume;
    stockQuote[symbol] = newStock;
}

// Get the value of a stock
function getStockPrice (bytes4 symbol) public view returns (uint) {
    return stockQuote[symbol].price;
}

//Get the value of volume traded for a stock

function getStockVolume (bytes4 symbol) public view returns (uint){
    return stockQuote[symbol].volume;
}

}