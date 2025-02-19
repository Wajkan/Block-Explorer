import { formatEther } from 'https://esm.sh/viem';
  

 // ACCOUNT DOM ACCOUNT DOM ACCOUNT DOM ACCOUNT DOM ACCOUNT DOM ACCOUNT DOM
 
 export const displayAccountBalance = (address, balance) => {

  let html = '';

  html = `
      <article>

          <section>
              <p>Adress: ${address} </p>
          </section>

          <section>
              <p>Balance: ${balance} ETH</p>
          </section>

      </article>
  `;

  return html;

};


// BLOCK DETAILS DOM BLOCK DETAILS DOM BLOCK DETAILS DOM BLOCK DETAILS DOM BLOCK DETAILS 


export const displayBlockInfo = (block) => {
  let html = '';

  html = `

     <tr>
              <td>${block.number}</td>
              <td>${block.gasUsed}</td>
              <td>${block.gasLimit}</td>
              <td>${new Date(parseInt(block.timestamp * 1000n)).toLocaleString()}</td>
              <td>${block.hash}</td>
    </tr>


  `;
  
  return html;
};


export const displayTransactionInfo = (transaction) => {
  let html = '';

  html = `

        <tr>
              <td>${transaction.hash}</td>
              <td>${transaction.from}</td>
              <td>${transaction.to}</td>
              <td>${transaction.gas}</td>
              <td>${formatEther(transaction.value)} ETH</td>
        </tr>

  `;

  return html;
};



// BLOCKS DOM  BLOCKS DOM BLOCKS DOM BLOCKS DOM BLOCKS DOM BLOCKS DOM BLOCKS DOM

export const displayBlockList = (block) => {
  let html = '';

  html = `

    <tr>
              <td>${block.number}</td>
              <td>${block.hash}</td>
              <td>${new Date(parseInt(block.timestamp * 1000n)).toLocaleString()}</td>
              <td> <a class="btn" href="./blockDetails.html?hash=${block.hash}">Details</a></td>
    </tr>

  `;

  return html;
};


// INDEX DOM INDEX DOM INDEX DOM INDEX DOM INDEX DOM INDEX DOM INDEX DOM INDEX DOM

export const displayChainInfo = (blocks, gasPrice) => {
  let html = `
      <div class="chainInfoContainer">
          <h2>Total amount of blocks: ${blocks}</h2>
          <p>Current gas price: ${formatEther(gasPrice)} ETH</p>
          <p>Last update: ${new Date()}</p>
      </div>
  `;

  return html;
};


// TRANSACTION LIST DOM TRANSACTION LIST DOM TRANSACTION LIST DOM TRANSACTION LIST DOM

export const displayTransactionList = (trx) => {
    let html = '';

    html = `

     <tr>
              <td>${trx.from}</td>
              <td>${trx.to}</td>
              <td>${trx.gas}</td>
              <td> ${parseFloat(formatEther(trx.value)).toFixed(2)} ETH </td>
    </tr>
    
  `;

  return html;
};