//overrides metamask v0.2 for our 1.0 version.
//1.0 lets us use async and await instead of promises
import Web3 from 'web3';

let web3 = new Web3(Web3.givenProvider);
export default web3;