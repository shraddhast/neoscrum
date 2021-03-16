import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            
            {/* <div>
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
            </div> */}

<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="img-responsive2 image"  
    src="https://p.kindpng.com/picc/s/78-786555_woman-doctor-icon-png-clipart-png-download-female.png" />
           
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav float-right">

      <li class="nav-item">
        <Link to ="./Dashboard2">  
            <button class="button1" type="button" >Add Feedback</button>
        </Link>
      </li>
      <li className="nav-item">
         <Link to ="./">
            <button class="button2" type="button" > Logout</button>
          </Link>
      </li>

    </ul>
   </div>

</nav>
</div>

        </div>
    )
}

export default Navbar
