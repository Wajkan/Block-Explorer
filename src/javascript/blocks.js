import { createClient } from './utilities/httpClient.js';
import { displayBlockList } from './utilities/dom.js';


const blockList = document.querySelector('#list');

let client = undefined;

const initApp = () => {

    client = createClient();

    totalBlockAmount();

};




const totalBlockAmount = async () => {

    const blocks = await client.getBlockNumber();
    console.log(blocks)

    for ( let i = blocks; i >= 0; i--) {

        console.log(i);

        const block = await client.getBlock({blockNumber: i}) // HÄMTAR VARJE BLOCK MED BLOCKNUMMER

        console.log(block);
        
        blockList.insertAdjacentHTML('beforeend', displayBlockList(block));

    };

};


document.addEventListener('DOMContentLoaded', initApp)
