import React from "react"
import { Link } from "react-router-dom";

const MenuComponent = () => {
    return (
    <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/transactions">Transactions</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/add">Add Transaction</Link>
            </li>
            </ul>
            </div>
        </nav>
    </React.Fragment>
    )
}

export default MenuComponent;