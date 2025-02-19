import { createClient } from './utilities/httpClient.js';
import { displayTransactionList } from './utilities/dom.js';


const selectTransactionList = document.querySelector('#trxlist');

let client = undefined;

const initApp = () => {

    client = createClient();

    getAllTransactions();
    
};

const getAllTransactions = async () => {

    const blocks = await client.getBlockNumber();


    for(let i = blocks; i >= 0; i--){
        
        const block = await client.getBlock({ blockNumber: i });

        const transactions = block.transactions;
    
        for(let transaction of transactions) {

            const trx = await client.getTransaction({hash: transaction})
            console.log(trx)

            selectTransactionList.insertAdjacentHTML('beforeend', displayTransactionList(trx));

        }
    }

};


document.addEventListener('DOMContentLoaded', initApp);