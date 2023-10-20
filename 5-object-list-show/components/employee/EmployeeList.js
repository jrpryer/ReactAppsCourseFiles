import Employee from "./Employee";
import { useEffect, useState } from "react";
import searchForAllEmployees from "../../services/EmployeeDataService";
import SearchEmployee from "../SearchEmployee"
// import { employees } from "../services/EmployeeDataService";

const EmployeeList = (props) => {
    let [emps, setEmps] = useState(searchForAllEmployees());
    const [count, setCount] = useState(emps.length);
    // let [emps, setEmps] = useState(searchForAllEmployees());
    let [showUpdateForm, setShowUpdateForm] = useState(false);
    let [showAddForm, setShowAddForm] = useState(false);
    let [modifyEmp, setModifiedEmp] = useState();
    let [disablePerformUpdate, setDisablePerformUpdate] = useState();
    
    // TODO: Call totalCount whenever the 'count' var changes
    // How? A: using 'useEffect' hook

    function totalCount() { // executed whenever there is a change in the number of employees
        setCount(emps.length, props.calculateCount(count))
        // props.calculateCount(count)
    }
    
    // fill with the functionality we want to perform
    useEffect(()=>{
        // totalCount();
        setCount(emps.length, props.calculateCount(count))
    }, [count])
    // This second arg is the array of var that - on change of their values - we want to carry out in the first arg

    const sortCriteria = (criteria) => {
        console.log(criteria);
        switch (criteria) {
            case 'name':
                emps.sort((e1, e2) => e1.name.localeCompare(e2.name));
                break;
            case 'id':
                emps.sort((e1, e2) => e1.id - e2.id);
                break;
            case 'salary':
                emps.sort((e1, e2) => e2.salary - e1.salary);
                break;
        }
        setEmps([...emps])
    }


    const handleDelete = (id, isConfirmed) => {
        if (isConfirmed) {
            setEmps(emps.filter(e => e.id != id));
            console.log(`delete emp with id: ${emps}`)
        }
    }

    const handleSearch = (value) => {
        console.log(value)
            let emp = searchForAllEmployees().filter(e => e.salary > value)
            console.log(emp)
            setEmps([...emp])
    }

    const handleUpdate = (empToBeUpdated) => {
        setShowUpdateForm(true);
        setModifiedEmp(empToBeUpdated);
        console.log(empToBeUpdated);
    }
    function handlePerformUpdate() {
        emps = emps.map((e) => {
            if (e.id === modifyEmp.id) {
                return {
                    ...e,
                    name: modifyEmp.name,
                    salary: modifyEmp.salary
                }
            } else {
                return e;
            }
        })
        setEmps(emps);
        setShowUpdateForm(false);
    }

    function handleNameOnChange(e) {
        if (e.target.value === null || e.target.value.length < 5) {
            setDisablePerformUpdate(true);
        } else {
            setDisablePerformUpdate(false);
        }
        setModifiedEmp({ ...modifyEmp, name: e.target.value });
    }

    function handleSalaryOnChange(e) {
        setModifiedEmp({ ...modifyEmp, salary: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault() // prevents the normal process of submitting a form and prevents the auto-reloading of the page.
    }


    function handleNewEmployee() {
        const lastEmployee = emps[emps.length - 1];
        console.log(lastEmployee.id + 1)
        setModifiedEmp({
            id: lastEmployee.id + 1,
            name: '',
            salary: ''
        });
        setShowAddForm(true);
    }

    function handleAddEmployee() {
        setEmps([
            ...emps,
            modifyEmp
        ]);
        console.log(emps);
        setShowAddForm(false);
    }


    return (<>
        <SearchEmployee emps={emps} sortCriteria={sortCriteria} handleSearch={handleSearch}></SearchEmployee>
        {
            showUpdateForm && <form onSubmit={submitHandler}>
                <input type="text" value={modifyEmp.id} readOnly></input>
                <br />
                <input type="text" value={modifyEmp.name} onChange={(e) => { handleNameOnChange(e) }}></input>
                <br />
                <input type="number" value={modifyEmp.salary} onChange={(e) => { handleSalaryOnChange(e) }}></input>
                <br />
                {disablePerformUpdate && <h6 style={{ color: "red" }}>Name must have more than 5 characters</h6>}
                <br />
                <button onClick={handlePerformUpdate} disabled={disablePerformUpdate}>Perform update</button>
            </form>
        }
        {emps.length > 0 &&
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">salary</th>
                        <th scope="col">update</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(e => {
                        return <Employee key={e.id} emp={e} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                    })}
                </tbody>
            </table>}
        <button onClick={handleNewEmployee}>Add a New Employee</button>
        {
            showAddForm && <form onSubmit={submitHandler}>
                <input type="text" value={modifyEmp.id} readOnly></input>
                <br />
                <input type="text" value={modifyEmp.name} onChange={(e) => { handleNameOnChange(e) }}></input>
                <br />
                <input type="number" value={modifyEmp.salary} onChange={(e) => { handleSalaryOnChange(e) }}></input>
                <br />
                {disablePerformUpdate && <h6 style={{ color: "red" }}>Name must have more than 5 characters</h6>}
                <br />
                <button onClick={handleAddEmployee} disabled={disablePerformUpdate}>Perform update</button>
            </form>
        }
        {/* { isAllowed && <Notification id={emp.id}></Notification>} */}
    </>
    )

}

export default EmployeeList