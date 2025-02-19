import { parseEther } from 'https://esm.sh/viem'
import { createWallet } from './utilities/httpClient.js';


const form = document.querySelector('#transaction-form');
const fromInput = document.querySelector('#from');
const toInput = document.querySelector('#to');
const valueInput = document.querySelector ('#value');


let client = undefined;

const initApp = () => {

    client = createWallet();

};


const submitTransaction = async (e) => {

    e.preventDefault();

    console.log('Create Transaction')

    try {

           await client.sendTransaction({

            account: fromInput.value,
            to: toInput.value,
            value: parseEther(valueInput.value),

        });

        location.href='./blocks.html'
      
    } catch (error) {

        console.log(error);
        
    }

};


document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', submitTransaction);