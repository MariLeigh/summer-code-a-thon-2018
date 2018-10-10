# RemitMart

### Getting started

Install Geth, create Geth account
```
geth account new
```

Run Ethereum (Geth) testnet
```
geth --testnet
```

Install Swarm, run Swarm node connected to your Geth account, exact command varies by endpoint path
```
swarm --ens-api 'users/YOURUSERNAME/Library/Ethereum/testnet/geth.ipc'   --bzzaccount YOURGETHACCOUNTNUMBERHERE --corsdomain "*"
```

Install the npm packages
```
npm i
```
Start ganache
```
ganache-cli
```
Compile and deploy contracts
```
truffle compile
truffle migrate
```
Using MetaMask browser extension:
-import account with first Private Key and Mnemonic 12 word phrase given in ganache-cli
![ganache screenshot](https://image.prntscr.com/image/kqhpvy-pRyWvOiwhDxvcKw.png)
-select network Localhost 8545

Start the app development env
```
npm start
```

## Dependencies

* Geth
* Swarm
