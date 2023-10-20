import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = (props) => {
    // const isUserAuthenticated = false;  // This is hardcoded here, but should be flagged by a login server or client component
    const isUserAuthenticated = sessionStorage.getItem('isUserAuthenticated')
    if (isUserAuthenticated != null) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    } else {
        return (
            <Navigate to="/login"></Navigate>
        )
    }
}

export default ProtectedRoute;