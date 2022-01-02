const main = async () => {
    // compiles the contract and generates necessary files in artifacts directory
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');

    // generates a new local blockchain just for this contract, it is completely destroyed after
    // the program finishes running because its local
    const nftContract = await nftContractFactory.deploy();

    // waits for the contract to be mined and deployed to the local blockchain, hardhat creates fake
    // miners to imitate the blockchain
    // constructor runs once the contract is deployed
    await nftContract.deployed();

    console.log("Contract deployed to:", nftContract.address);
};
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
  
runMain();