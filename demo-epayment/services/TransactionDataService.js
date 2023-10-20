let transactions = [
    {id: 1, name: "apple", amount: 10 , operation: "debit"},
    {id: 2, name: "soap", amount: 13 , operation: "debit"},
    {id: 3, name: "dogfood", amount: 20 , operation: "credit"},
    {id: 4, name: "cheese", amount: 6 , operation: "debit"},
    {id: 5, name: "bacon", amount: 25 , operation: "credit"},
    {id: 6, name: "chips", amount: 14 , operation: "debit"},
     {id: 7, name: "toothpaste", amount: 9, operation: "credit"}
]

function searchForAllTransactions() {
    return transactions;
}

// export default employees;
export default searchForAllTransactions;