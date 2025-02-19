import { createClient } from './utilities/httpClient.js';
import { displayBlockInfo, displayTransactionInfo } from './utilities/dom.js';


const listTransactionDetails = document.querySelector('#transactionDetails');

const selectedBlock = document.querySelector('#selectedBlock');


let client = undefined; 

const initApp = () => {

    const hash = location.search.split('=')[1];

    client = createClient();

    getTransactionDetails(hash);

};


const getTransactionDetails = async (hash) => {

    const block = await client.getBlock({blockHash: hash});

    selectedBlock.insertAdjacentHTML('beforeend',displayBlockInfo(block));

    

    for(let trx of block.transactions){

       const transaction = await client.getTransaction({
        hash: trx,

       });

       listTransactionDetails.insertAdjacentHTML('beforeend', displayTransactionInfo(transaction));


    }

};


document.addEventListener('DOMContentLoaded', initApp);