import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <img class="img-responsive2 image"  
            src="https://p.kindpng.com/picc/s/78-786555_woman-doctor-icon-png-clipart-png-download-female.png" />
            <div class="col-justify-right ">

            <Link to ="./Dashboard2">  
            <button class="button1" type="button" >Add Feedback</button>
            </Link>
            <Link to ="./">
            <button class="button2" type="button" > Logout</button>
            </Link>
           
            </div>
            </div>
            </nav>
            </div>


</div>
    )
}

export default Navbar
