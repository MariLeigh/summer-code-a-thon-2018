// overrides metamask v0.2 for our 1.0 version.
// 1.0 lets us use async and await instead of promises
import Web3 from 'web3';

let web3;

if (typeof Web3 !== 'undefined') {
  web3 = new Web3(Web3.givenProvider);
} else {
  web3 = new Web3('http://localhost:8545');
  // console.log('Error: web3 is "undefined". Is metamask working? if yes, Try page refresh');
}

export default web3;