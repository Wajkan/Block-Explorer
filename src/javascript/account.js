import { formatEther } from 'https://esm.sh/viem';
import { createClient } from './utilities/httpClient.js';
import { displayAccountBalance } from './utilities/dom.js';

const balanceForm = document.getElementById('balanceForm');  
const accountInput = document.getElementById('accountInput');
const displayAmount = document.getElementById('displayAmount');


let client = undefined;

const initApp = () => {

client = createClient();

};



const getAccountBalance = async (address) => {

    try {

        const balance = await client.getBalance({
            address: address
        });
        
        return parseFloat(formatEther(balance)).toFixed(2);

    } catch (error) {

        throw new Error('Failed to fetch balance');
        
    }
};




const handleFormSubmit = async (e) => {

    e.preventDefault();
    
    const address = accountInput.value.trim();  // HÄMTAR ADRESS IFRÅN INPUT
    
    if (!address) {

       return displayAmount.innerText = 'please enter a valid adress..';

    }

    try {     
        
        const balance = await getAccountBalance(address);  // SKICKA UPP SAMT FÅR TILLBAKA KONVERTERAT VÄRDE
        
        displayAmount.innerHTML = displayAccountBalance(address, balance);

    } catch (error) {

        displayAmount.innerText = 'please enter a valid adress..';

    }
    
};





balanceForm.addEventListener('submit', handleFormSubmit);   // LYSSNARE PÅ SUBMIT

document.addEventListener('DOMContentLoaded', initApp);

