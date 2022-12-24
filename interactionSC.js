const { ethers } = require('ethers');
const { walletABI } = require('./walletABI')

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/e79b0cc20f88494baee53efdd90e4361`) //Infura Goerli Testnet

console.log(provider)

const walletAddress = "0x031cb9915f8b2e1a568f376bb6349e837c53f5c9";

const contractInteraction = async () => {
    walletABI = JSON.parse(walletABI);
    const walletContract = new ethers.Contract(walletAddress, walletABI, provider); // creating contract instance to interact the smart contract
    console.log(typeof walletContract);

    const contractName = await walletContract.name();
    console.log(`Contract Name: ${contractName}`);

    // const contractBalance = await walletContract.contractBalance();
    // const balethContract = ethers.utils.formatEther(contractBalance);
    // console.log("Contract Balance:", balethContract);
}