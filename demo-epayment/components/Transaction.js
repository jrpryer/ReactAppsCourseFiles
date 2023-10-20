const Transaction = (props) => {
    const tran = props.tran
    return (
        <tr key= {tran.idt}>
            <td>{tran.id}</td>
            <td>{tran.name}</td>
            <td>{tran.amount}</td>
            <td>{tran.operation}</td>
            </tr>
        );
}

export default Transaction
