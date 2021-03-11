import React, { Component } from 'react'


class NewDeveloper extends Component {
    
    onchangeHandler = ((event)=>{
        this.setState({name: event.target.value})

    })
    render(){
        return (
            <>
            <div className= "my-5">
                <h1 className="text-center">Enter New Developer</h1>
            </div>
            
            <div className="container " >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={this.onchangeHandler}>
                    
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" 
                    class="form-label text-left">Employee Name</label>
                    <input type="text" 
                    class="form-control" 
                    id="exampleFormControlInput1"
                    name="ename"
                    value= ""
                    onChange={InputEvent}
                    placeholder="Employee Name" />
                    </div>
                    

                    <div class="mb-3">
                    <label for="exampleFormControlInput1" 
                    class="form-label">Email address</label>
                    <input type="email" class="form-control" 
                    id="exampleFormControlInput1"
                    name="email"
                    value= ""
                    onChange={InputEvent}
                    placeholder="name@example.com" />
                    </div>

                    <div class="input-group mb-3">
                     <input type="file" class="form-control" 
                     id="inputGroupFile02"
                     name="browse" />
                     <label class="input-group-text" 
                     for="inputGroupFile02">Upload</label> 
                    </div>

                    <div class= "col-12">
                    <button class=" btn btn-primary" type= "submit">Submit</button>
                    </div>
    
                </form>
            </div>
         </div>
       </div>
        </> 
        )
    }

    }
    

export default NewDeveloper
