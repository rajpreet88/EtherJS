import './App.css';
import { useEffect } from 'react';
const { ethers } = require('ethers');
const { walletABI } = require('../../walletABI');


function App() {

  const contractAddress = "0x3505781c63f5f0fa6c48529321edb29dcaa0b7cd";

  useEffect(() => {
    let writeContract = async ()=>{

      const provider = new ethers.providers.Web3Provider(window.ethereum); //using web3 library to access the metamask using the window.ethereum which injects window object in the browser to access the metamask

      await provider.send("eth_requestAccounts",[]); // open the Metamask when useEffect is in process;

      const signer = provider.getSigner(); //signer is required for writing anything to blockchain;

      const contract = new ethers.Contract(contractAddress, walletABI, signer); // creating instance of smart contract to interact with it

      // await contract.setValue(23);
      //  console.log('Value set in blockchain successfully');

      // await contract.sendEthContract({value: ethers.utils.parseEther('0.002')});
      // console.log('Eth sent to contract successfully');
      await contract.sendEthUser('0x71f37043a9aA516878909f35EF4679d3710e677b',{value: ethers.utils.parseEther('0.002')});
      console.log('Eth sent to user from the contract successfully')
    }
    writeContract();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
