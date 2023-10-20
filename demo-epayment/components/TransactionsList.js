import React, { useState } from "react"
import searchForAllTransactions from "../services/TransactionDataService"
import Transaction from "./Transaction";
import SearchTransaction from "./SearchTransaction";

const TransactionsList = () => {
    const [trans, setTrans] = useState(searchForAllTransactions());
    // const [showAddForm, setShowAddForm] = useState(false);

    const sortCriteria = (criteria) => {
        console.log(criteria);
        trans.sort((e1, e2) => e1.operation.localeCompare(e2.operation));
        setTrans([...trans])
    }

    const handleSearch = (value) => {
        console.log(value)
        let tran = searchForAllTransactions().filter(e => e.operation.includes(value))
            console.log(tran)
            setTrans([...tran])
    }

    return (
        <React.Fragment>
            <SearchTransaction trans={trans} sortCriteria={sortCriteria} handleSearch={handleSearch}></SearchTransaction>
        {trans.length > 0 &&
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">amount</th>
                        <th scope="col">operation</th>
                    </tr>
                </thead>
                <tbody>
                    {trans.map(e => {
                        return <Transaction key={e.id} tran={e}/>
                    })}
                </tbody>
            </table>}
        </React.Fragment>
    )

}

export default TransactionsList