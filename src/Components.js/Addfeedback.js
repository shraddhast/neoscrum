import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import Addfeedbackdata from './Addfeedbackdata'


export default function Addfeedback(props) {
    
    const [count, setcount] = useState('')

    const handlecount= (e)=>{
        setcount(e.target.value)
    }

    return (<>

        <div className='col-md-4 col-sm-6  '>
        <div class="card-group crd">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> </h5>
                <p className="card-text">
                    
                <img class="img-responsive2 image"  
                src={props.image} /></p>

                <p className="card-text">{props.name}</p>

               {/* <textarea 
               maxLength={100}
               value={count}
               onChange={handlecount} 
               className="textarea" > </textarea> */}
             
               <div class="textarea__wrapper"
                maxLength={100}
                value={count}
                onChange={handlecount} >
                <textarea className="text " /><br/>
        
                  <div className="row">
                  <div className="col-8 text-left">
                        <span class="textarea__count">
                        <small class="text-muted"> max 100 letters
                        </small></span>
                  </div> 
                   <div className="col text-right">
                   <small class="text-muted">  {count.length}/100 </small>
                    </div>
                  
                  </div>
                   </div>

                {/* <p class="card-text maxchar_mssg"><small class="text-muted">max 100 letters</small></p> */}

                <a href="#" class="btn btn-primary bn">Submit Feedback</a>
                </div>
            </div>
        </div>
        </div>

        </>
    )

}
