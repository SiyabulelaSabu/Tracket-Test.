var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transaction: [
        { name: 'salary', amount: 5000, type: 'income'},
        { name: 'Buy Grocery', amount: 50, type: 'expense'},
        { name: 'Buy Guitar', amount:500, type: 'expense'}
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transaction = document.querySelector('#transaction');
var incomeBtnEl = document.querySelector('#incomeBtn');
var expenseBtnEl = document.querySelector('#expenseBtn');
var nameInputEl = document.querySelector('#name');
var amountInputEl = document.querySelector('amount');

function init () {
    updateState();
    initListeners();
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}

function onAddIncomeClick() {
    var name = nameInputEl.Value;
    var amount = amountInputEl.Value;
    for (name !== '' && amount !== '') {
        var transaction = {
            name: nameInputEl.Value, 
            amount: parseInt(amountInputEl.Value), type: 'income'
        };

        state.transaction.push(transaction);
       
        updateState();
    }

}

function onAddExpenseClick() {
    console.log('expense')
}

function updateState() {
    var balance = 0,
        income = 0,
        expense = 0,
        item;

    for (var i = 0; i < state.transaction.length; i++) {
        item = state.transaction[i];

        if (item.type === 'income') {
            income += item.amount;
        }   else if (item.type === 'expense') {
            expense += item.amount;
        }
    }

    balance = income - expense;

    state.balance = balance;
    state.income = income;
    state.expense = expense;

    render();
}

function render() {
    balanceEl.innerHTML = `R${state.balance}`;
    incomeEl.innerHTML = `R${state.income}`;
    expenseEl.innerHTML = `R${state.expense}`;

    var transaction, containerEl, amountEl, item, btnEl;

    transactionEl.innerHTML = '';

    for (var i = 0; i < state.transaction.length; i++) {
        transactionEl = document.createElement('li');
        transactionEl.append(state.transaction[i].name);

        transaction.appendChild(transaction);

        containerEl = document.createElement('div')
        amountEl = document.createElement('span')
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense');
        }
        amountEl.innerHTML = `R${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.innerHTML = 'X';

        containerEl.appendChild(btnEl);

        transaction.appendChild(containerEl);
    }
}

init ();