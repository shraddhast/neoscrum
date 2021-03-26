import React from 'react'
import { Link , useHistory} from 'react-router-dom'

function Navbar() {

  const history = useHistory()

  const handlelogout = () => {
    localStorage.setItem("isLoggedin",false)
    //const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
    //console.log(isLoggedin)
    history.push("./")
    
  }
    return (               

<div >

  <nav class="navbar navbar-expand-lg navbar-light bar">
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
         
            <button class="button2"  onClick={handlelogout}> Logout</button>
          
      </li>

    </ul>
   </div>

  </nav>
</div>
      
    )
}

export default Navbar
