const { ethers } = require('ethers');
const { walletABI } = require('./walletABI')

//0x3505781c63f5f0fa6c48529321edb29dcaa0b7cd

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/e79b0cc20f88494baee53efdd90e4361`) //Infura Goerli Testnet


// console.log(provider)

const contractAddress = "0x3505781c63f5f0fa6c48529321edb29dcaa0b7cd";
// const contractABI = [
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "_address",
//                 "type": "address"
//             }
//         ],
//         "name": "accountBalance",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "contractBalance",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getValue",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "sendEthContract",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "_user",
//                 "type": "address"
//             }
//         ],
//         "name": "sendEthUser",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "_num",
//                 "type": "uint256"
//             }
//         ],
//         "name": "setValue",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ]

const contractInteraction = async () => {
    // contractABI = JSON.parse(contractABI);
    const walletContract = new ethers.Contract(contractAddress, walletABI, provider); // creating contract instance to interact the smart contract
    // console.log(walletContract);

    const contractName = await walletContract.name(); // interacting with the public name state varibale in the contract
    console.log(`Contract Name: ${contractName}`);

    const num = await walletContract.getValue();
    console.log(`Contract Number Value: ${num}`)

    let contractBalance = await walletContract.contractBalance();
    console.log(`Contract balance: ${contractBalance}`);

    let userBalance = await walletContract.accountBalance(`0x1A97E9bE190d60Aa1BA810Ff4a7Cfa36ea0ae0D8`);
    console.log(`User account Balance: ${userBalance}`)
    // const balethContract = ethers.utils.formatEther(contractBalance);
    // console.log("Contract Balance:", balethContract);
}
contractInteraction();