const { ethers } = require('ethers');

// const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/gxZS6FOSyQSR8zqCIpufwG6J2RlGioQJ`); // Alchemy https blockchain connection

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/e79b0cc20f88494baee53efdd90e4361`); // Infura https blockchain connection

const readBlockchain = async () => {
//     const block = await provider.getBlockNumber();
//     console.log(`Current Block Number ${block}`);
// }

    const balance = await provider.getBalance(`0x1324c0fb6f45f3bf1aaa1fcdc08f17431f53ded7`);
    console.log("Account Balance in BigNumber: ", balance); // Balance in Big Number
    console.log(`Account Balance in Wei: ${balance} Wei`); // Balance in Wei
    const balanceETH = ethers.utils.formatEther(balance);
    console.log(`Account Balance in ETH: ${balanceETH} ETH`); // Balance in ETH
}
readBlockchain();