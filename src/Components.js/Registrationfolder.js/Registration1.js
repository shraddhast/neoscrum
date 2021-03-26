import React,{useEffect} from 'react'
import Registration from './Registration'
import {useHistory} from 'react-router-dom'

function Registration1() {

    const history = useHistory()

    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
    console.log(isLoggedin)

    useEffect(() => {
        if(isLoggedin){
            history.push("./dashboard")
        }
        else{
            history.push("./Registration1")
        }
        
    }, [isLoggedin])
    return (
        <div>
            <Registration/>
        </div>
    )
}

export default Registration1
