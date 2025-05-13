export class Api {
    constructor(props) {
        this._url = props.baseUrl;
        this.headers = props.headers;
    }

    signIn(email, password, name, phoneNumber, tin, accountNumber, bankId = 1, entityTypeId = 1) {
        return fetch(`${this._url}/register`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({email, password, name, phoneNumber, tin, entityTypeId}),
        })
            .then(res => this._checkResult(res))
    }

    getUser(id) {
        return fetch(`${this._url}/user/profile/${id}`,)
            .then(res => this._checkResult(res))
    }

    editUser(user) {
        return fetch(`${this._url}/user/profile`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                email: user.email,
                name: user.name,
                phone: user.phoneNumber,
                tin: user.tin,
            })
        })
            .then(res => this._checkResult(res))
    }

    getAccounts() {
        // счета пользователя
        return fetch(`${this._url}/user/accounts`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(res => this._checkResult(res))
    }

    createAccount(accountNumber, bankId) {
        return fetch(`${this._url}/user/accounts`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                accountNumber: accountNumber,
                bankId: bankId,
            })
        })
            .then(res => this._checkResult(res))
    }

    updateAccount(id) {
        return fetch(`${this._url}/user/accounts/${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                id: id,
            })
        })
    }

    deleteAccount(id) {
        return fetch(`${this._url}/user/accounts/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(res => this._checkResult(res))
    }

    getCounterparties() {
        return fetch(`${this._url}/user/counterparties`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(res => this._checkResult(res))
    }

    createCounterparties(entityTypeId, tin, name, phoneNumber, accountNumber, bankId) {
        return fetch(`${this._url}/user/counterparties`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                entityTypeId, tin, name, phoneNumber, accountNumber, bankId
            })
        })
            .then(res => this._checkResult(res))
    }

    getCounterpartiesId(id) {
        return fetch(`${this._url}/user/counterparties${id}`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(res => this._checkResult(res))
    }

    updateCounterparties(entityTypeId, tin, name, phoneNumber, accountNumber, bankId, id) {
        return fetch(`${this._url}/user/counterparties${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                entityTypeId, tin, name, phoneNumber, accountNumber, bankId
            })
        })
            .then(res => this._checkResult(res))
    }

    deleteCounterparties(id) {
        return fetch(`${this._url}/user/counterparties${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(res => this._checkResult(res))
    }

    getUserTransactions() {
        return fetch(`${this._url}/user/transactions`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(res => this._checkResult(res))
    }

    createTransaction(dateTime, transactionTypeId, transactionStatusId, amount, comment, accountId, counterpartyId, userIsSender, categoryId) {
        return fetch(`${this._url}/user/transactions`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                dateTime,
                transactionTypeId,
                transactionStatusId,
                amount,
                comment,
                accountId,
                counterpartyId,
                userIsSender,
                categoryId
            })
        })
        .then(res => this._checkResult(res))
    }

    updateTransaction(dateTime, transactionTypeId, transactionStatusId, amount, comment, accountId, counterpartyId, userIsSender, categoryId) {
        return fetch(`${this._url}/user/transactions`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                dateTime,
                transactionTypeId,
                transactionStatusId,
                amount,
                comment,
                accountId,
                counterpartyId,
                userIsSender,
                categoryId
            })
        })
        .then(res => this._checkResult(res))
    }

    deleteTransaction(id) {
        return fetch(`${this._url}/user/transactions/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(res => this._checkResult(res))
    }

    getBanks() {
        return fetch(`${this._url}/banks`, {
            method: 'GET',
            headers: this.headers,
        })
        .then(res => this._checkResult(res))
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api({
    baseUrl: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api
