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

Start the app development env
```
npm start
```

## Dependencies

* Geth
* Swarm
