import { useState } from "react";
import React from "react"

const SearchEmployee = (props) => {

    const [salary, setSalary] = useState('');
    //let employees = props.emps;

    function searchSalary(e) {
        props.handleSearch(e.target.value)
    }

    function handleRadio(e) {
        props.sortCriteria(e.target.value)
    }

    return (
        <React.Fragment>
            Sort Criteria

            Id: <input type="radio" name="sort" value="id" onChange={handleRadio}></input>
            Name: <input type="radio" name="sort" value="name" onChange={handleRadio}></input>
            Salary: <input type="radio" name="sort" value="salary" onChange={handleRadio}></input>
            <br/>
            <input type="text" onChange={searchSalary}></input>
        </React.Fragment>
    )
}

export default SearchEmployee;