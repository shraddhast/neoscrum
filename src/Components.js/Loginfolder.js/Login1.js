import React ,{useEffect}from 'react'
import Login from './Login'
import {useHistory} from 'react-router-dom'

function Login1() {

    const history = useHistory()

    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
    console.log(isLoggedin)

    useEffect(() => {
        if(isLoggedin){
            history.push("./dashboard")
        }
        else{
            history.push("./")
        }
        
    }, [isLoggedin])
    return (
        <div>
            <Login />
        </div>
    )
}

export default Login1
