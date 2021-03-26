import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cards from './cards'
import feedback from './feedback'
import Navbar from './Navbar'
import {useHistory} from "react-router-dom"



function Dashboard() {
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
            <Navbar />
            
            <div class='row text-left' >{

                feedback.map((value,index)=> {
                     return <Cards name={value.name} review={value.review}  />
                })
            }
            </div>
            </div>
    ) 
}

export default Dashboard
