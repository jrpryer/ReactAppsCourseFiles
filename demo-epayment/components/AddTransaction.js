const AddTransaction = () => {
    submitHandler
    
    return (
    <form onSubmit={submitHandler}>
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
    )
}

export default AddTransaction