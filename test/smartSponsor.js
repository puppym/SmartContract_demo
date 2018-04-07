var smartSponsor = web3.eth.contract([{"constant":true,"inputs":[],"name":"refunded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"complete","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"pledge","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"benefactor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numPledges","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pledges","outputs":[{"name":"amount","type":"uint256"},{"name":"eth_address","type":"address"},{"name":"message","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"drawdown","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_benefactor","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

var theminer = eth.accounts[0];
var therunner = eth.accounts[1];
var thesponsor = eth.accounts[2];
var thebenefactor = eth.accounts[3];

var ss = smartSponsor.new(thebenefactor,
  {
    from: eth.accounts[0],
    data: '0x6060604052341561000f57600080fd5b604051602080610847833981016040528080519060200190919050505b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506000600160146101000a81548160ff0219169083151502179055506000600160156101000a81548160ff02191690831515021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505b61074a806100fd6000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312f53950146100a7578063403c9fa8146100d4578063522e1177146100fd578063590e1ae31461012a57806376bf80441461013f5780638a81694c146101665780638da5cb5b146101bb578063a46f7d1914610210578063ac12408114610239578063e77ef21f146102b2575b600080fd5b34156100b257600080fd5b6100ba6102c7565b604051808215151515815260200191505060405180910390f35b34156100df57600080fd5b6100e76102da565b6040518082815260200191505060405180910390f35b341561010857600080fd5b6101106102fa565b604051808215151515815260200191505060405180910390f35b341561013557600080fd5b61013d61030d565b005b341561014a57600080fd5b61016460048080356000191690602001909190505061046d565b005b341561017157600080fd5b61017961056e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c657600080fd5b6101ce610594565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021b57600080fd5b6102236105b9565b6040518082815260200191505060405180910390f35b341561024457600080fd5b61025a60048080359060200190919050506105bf565b604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390f35b34156102bd57600080fd5b6102c5610609565b005b600160149054906101000a900460ff1681565b60003073ffffffffffffffffffffffffffffffffffffffff163190505b90565b600160159054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806103775750600160159054906101000a900460ff165b8061038e5750600160149054906101000a900460ff165b1561039857600080fd5b600090505b600254811015610435576003600082815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60036000848152602001908152602001600020600001549081150290604051600060405180830381858888f19350505050505b80600101905061039d565b60018060146101000a81548160ff02191690831515021790555060018060156101000a81548160ff0219169083151502179055505b50565b60003414806104885750600160159054906101000a900460ff165b8061049f5750600160149054906101000a900460ff165b156104a957600080fd5b6060604051908101604052803481526020013373ffffffffffffffffffffffffffffffffffffffff16815260200182600019168152506003600060025481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201906000191690559050506002600081548092919060010191905055505b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806106715750600160159054906101000a900460ff165b806106885750600160149054906101000a900460ff165b1561069257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050505060018060156101000a81548160ff0219169083151502179055505b5600a165627a7a723058207923435306eaca200aa2e90fd9d26703e81578dbaf43f1e3746412287956d5bd0029', 
    gas: 3000000
  }, function(e, contract){
       if(!e) { if(!contract.address) {
         console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
       } else {
         console.log("Contract mined! Address: " + contract.address);
         console.log(contract);
       } 
     }
});
