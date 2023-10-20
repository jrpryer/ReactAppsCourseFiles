import { useState } from "react";
import React from "react"

const SearchTransaction = (props) => {

    function searchOperation(e) {
        props.handleSearch(e.target.value)
    }

    function handleRadio(e) {
        props.sortCriteria(e.target.value)
    }

    return (
        <React.Fragment>
            Sort Criteria

            Amount: <input type="radio" name="sort" value="amount" onChange={handleRadio}></input>
            <br/>
            <input type="text" onChange={searchOperation}></input>
        </React.Fragment>
    )
}

export default SearchTransaction;