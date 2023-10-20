import { useNavigate } from "react-router-dom"

const Logout = (props) => {
    const isUserLoggedIn = sessionStorage.getItem('isUserAuthenticated')
    const navigate = useNavigate()

    console.log(isUserLoggedIn)

    if (isUserLoggedIn != null) {
        console.log("inside not null")
        // sessionStorage.removeItem('isUserAuthenticated')
        sessionStorage.setItem('isUserAuthenticated', false)
        props.notifyUserLoggedIn(false)
    } else {
        // navigate('/home')
        navigate('/login')
    }
}

export default Logout