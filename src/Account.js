class Account {
    #balance;
    #transactions;

    constructor(initialBalance = 0, transaction = []) {
        this.#balance = initialBalance;
        this.#transactions = transaction;
    };

    getBalance() {
        return this.#balance;
    };

    getTransactions() {
        return this.#transactions;
    };

    withdraw(transactions) {
        const { date = transactions.getDate(), credit = transactions.getCreditAmount(), debit = transactions.getDebitAmount() } = transactions;
        this.#balance -= debit;
        const currentTrans = [date, credit, debit, this.#balance];
        return this.#transactions.push(currentTrans);
    };

    deposit(transactions) {
        const { date = transactions.getDate(), credit = transactions.getCreditAmount(), debit = transactions.getDebitAmount() } = transactions;
        this.#balance += credit;
        const currentTrans = [date, credit, debit, this.#balance];
        return this.#transactions.push(currentTrans);
    };
}

export default Account;