import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import Addfeedbackdata from './Addfeedbackdata'

export default function Addfeedback(props) {
    
    return (<>

        <div className='col-md-4 col-sm-6  '>
        <div class="card-group crd">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> </h5>
                <p className="card-text">
                    
                <img class="img-responsive2 image"  
                src={props.image} />
                   
                </p>


                {/* <img class="img-responsive2 image"  
                src="https://p.kindpng.com/picc/s/78-786555_woman-doctor-icon-png-clipart-png-download-female.png" />
                <p className="card-text-justify-left">{props.name}</p> */}
               <textarea maxLength="100"> </textarea>
                <p class="card-text"><small class="text-muted">max 100 letters</small></p>
                <a href="#" class="btn btn-primary">Submit Feedback</a>
                </div>
            </div>
        </div>
        </div>

        </>
    )

}
