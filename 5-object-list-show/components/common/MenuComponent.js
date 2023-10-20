import React, { useContext, useEffect, useState } from "react";
import { countContext, loginContext } from "../../App";
import { Link, Navigate } from "react-router-dom"

const MenuComponent = () => {
    const count = useContext(countContext);
    const userLoginContext = useContext(loginContext)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(()=>{setIsUserLoggedIn(userLoginContext)}
    ,[userLoginContext]
    )

      return(
        <React.Fragment>
          {/* <Link to=""> Add Record |</Link> */}
          <br/>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">EMS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                {!isUserLoggedIn &&
                <li class="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>  
                </li>
                }
                {isUserLoggedIn &&
                <>
                <li class="nav-item">
                    <Link className="nav-link" to="/employees">Show Records</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/logout"> Logout</Link>
                </li>
                <span className="nav-link"> | Total registered users are: {count}</span>
                </>
                }
              
              </ul>
            </div>
          </nav>
          <br/>
          <br/>
        </React.Fragment>
      )
}

export default MenuComponent