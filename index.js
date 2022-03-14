const Modal = {
  open() {
    //abrir modal e adiciona class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    //fechar modal e remover class active ao modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

/* array de item da transaction */

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2022",
  },
  {
    id: 2,
    description: "Criação website",
    amount: 50000,
    date: "23/01/2022",
  },
  {
    id: 3,
    description: "Internet",
    amount: -10000,
    date: "23/01/2022",
  },
];

/*
   1- é preciso somar as entradas
   2- é preciso somar as saidas
   3- remover das entradas o valor das saidas
   4- ter o total
  
  */

const transaction = {
  incomes() {
    //entradas
  },
  expenses() {
    //salidas
  },
  total() {
    // entradas - saidas
  },
};

/* Formatando amount */

const formatAmount = {
    formatCurrency(value){
        // const signal = Number(value) < 0 ? "-" : "";

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return value;
    }
};

/*
Preciso substituir os dados do html com os dados do javascript
*/

const montandoHTMLitemTransation = {
  transactionsContainerItems: document.querySelector("#data-table tbody"),

  addTransation(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = montandoHTMLitemTransation.innerHTMLtransation(transaction);
    
    montandoHTMLitemTransation.transactionsContainerItems.appendChild(tr);
  },
  innerHTMLtransation(transaction) {
      const classCss = transaction.amount > 0 ? "income" : "expense";
      const amount = formatAmount.formatCurrency(transaction.amount)
    const itemHTML = `
        <tr>
        <td class="description">${transaction.description}</td>
        <td class="${classCss}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="./assets/minus.svg" alt="Remover transação" /></td>
      </tr>
        `;
    return itemHTML;
  },
};


transactions.forEach(function(trans){
    montandoHTMLitemTransation.addTransation(trans);
});