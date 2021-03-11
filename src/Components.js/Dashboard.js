import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './cards'
import feedback from './feedback'


function Dashboard() {

    return (
        <div>
            Dashboard
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <img class="img-responsive2 image"  
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />

            <div class="col-justify-right ">

            <Link to ="./Addfeedback">  
            <button class="button1" type="button" >Add Feedback</button>
            </Link>
            <Link to ="./">
            <button class="button2" type="button" > Logout</button>
            </Link>
           
            </div>
            </div>
            </nav>
            <br />
            <div class='row'>{

                feedback.map((value,index)=> {
                     return <Cards name={value.name} review={value.review}  />
                })
            }
            </div>
            
    </div>
    ) 
}

export default Dashboard
