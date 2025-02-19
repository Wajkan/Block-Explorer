import { createClient } from './utilities/httpClient.js';
import { displayChainInfo } from './utilities/dom.js';


const selectTotalBlocks = document.querySelector('#totalBlocks');

let client = undefined;

const initApp = () => {

 client = createClient();

    totalBlockAmount();

};


const totalBlockAmount = async () => {

    const blocks = await client.getBlockNumber();

    const gasPrice = await client.getGasPrice();

    selectTotalBlocks.innerHTML = displayChainInfo(blocks, gasPrice);

};



document.addEventListener('DOMContentLoaded', initApp)  