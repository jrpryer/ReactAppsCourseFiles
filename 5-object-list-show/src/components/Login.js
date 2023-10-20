import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({user: '', password: ''});
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    function handleLogin() {
        if(credentials.user === 'admin' && credentials.password === 'pass') {
            setMessage('Login Successful')
            console.log('Login Successful')
            props.notifyUserLoggedIn(true)
            sessionStorage.setItem('isUserAuthenticated', true)
            navigate('/employees')

        } else {
            sessionStorage.setItem('isUserAuthenticated', false)
            props.notifyUserLoggedIn(false)
            setMessage("Invalid Creds")
        }
    }

    return(
        <React.Fragment>
            {"Username: "}<input onChange={(e)=>{setCredentials({...credentials, user: e.target.value})}}></input>
            <br/>
            {"Password: "}<input onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}></input>
            <br/>
            <button onClick={handleLogin}>Login</button>
            <br/>
            <span className="error">{message}</span>
        </React.Fragment>
    )
}

export default Login;