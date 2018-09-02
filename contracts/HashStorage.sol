pragma solidity ^0.4.0;

contract HashStorage {
    function HashStorage(){

    }
    string ipfsHash;

    function set(string x) public {
        ipfsHash = x;
    }

    function get() public view returns (string) {
        return ipfsHash;
    }
}
