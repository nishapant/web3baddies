pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// our NFT contract will inherit the smart contract that we imported
contract MyEpicNFT is ERC721URIStorage {
    constructor() {
        console.log("this is my contract!");
        
    }
}