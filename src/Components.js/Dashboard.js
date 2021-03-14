import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './cards'
import feedback from './feedback'
import Navbar from './Navbar'


function Dashboard() {

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
