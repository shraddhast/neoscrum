import React from 'react'

function Cards(props) {

    return (
    <>
   
        <div className='col-md-4 col-sm-6  '>
        <div class="card-group crd">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">FeedBack</h5>
                <p className="card-text">{props.review}</p>
                <p class="card-text"><small class="text-muted">sent by:{props.name}</small></p>
                </div>
            </div>
        </div>
        </div>
        
    </>
    )
}

export default Cards
