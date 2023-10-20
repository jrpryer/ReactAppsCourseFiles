const Employee = (props) => {
    const emp = props.emp
    return (
        <tr key= {emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.salary}</td>
            {/* <td><button onClick={()=>clickHandler()}>Get ID</button></td>
            <td><button onClick={()=>{props.handleDelete(props.emp.id, window.confirm(`Delete employee ${props.emp.name}?`))}}>delete</button></td> */}
            <td><button className="btn btn-primary" onClick={()=>props.handleUpdate(emp)}>Update</button></td>
            <td><button className="btn btn-danger" onClick={()=>props.handleDelete(emp.id, window.confirm(`Delete employee ${props.emp.name}?`))}>delete</button></td>
            </tr>
        );


}

export default Employee
