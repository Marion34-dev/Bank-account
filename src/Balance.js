class Balance {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    withdraw(amountToWithdraw) {
        this.#balance -= amountToWithdraw;
    }

    deposit(date = "", amount = 0) {
        this.#balance += amount;
        console.log(`${date} || ${amount.toFixed(2)} ||        || ${this.#balance.toFixed(2)}`);
        return `${date} || ${amount.toFixed(2)} ||         || ${this.#balance.toFixed(2)}`;
    }
}

export default Balance;