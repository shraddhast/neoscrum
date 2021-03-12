import React from 'react'
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validateInfo from './validateInfo'

const Registration =() => {

    const {handleChange, values, handleSubmit,errors} = useForm(validateInfo)

    console.log(errors)
    return (
        <div>
            <div className= "my-5">
                <h1 className="text-center">Enter New Developer</h1>
            </div>
            
            <div className="container text-left" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    
                    <form onSubmit= { handleSubmit } >
                    
                    <div className="mb-3">
                    <label htmlFor="ename" 
                    className="form-label">
                    Employee Name</label>
                     <input
                     type="text" 
                     className="form-control" 
                     id="ename" 
                     name= "ename"
                     placeholder="Employee Name" 
                     value = {values.ename}
                     onChange={handleChange}/>
                      {/* {console.log(errors.errors)} */}
                      <small className="effect">
                     {errors.errors == undefined ? "" : <p>{errors.errors.ename}</p>}</small>
                    </div>
                    

                    <div className="mb-3">
                    <label htmlFor="email" 
                    className="form-label">Email address</label>
                    <input type="text" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value = {values.email}
                    onChange={handleChange}
                    placeholder="name@example.com" />
                     <small className="effect">
                     {errors.errors == undefined ? "" : <p>{errors.errors.email}</p>}</small>
                    {/* {errors.email && <p>{errors.email}</p>} */}
                    </div>

                    <div className="input-group mb-3">
                     <input type="file" 
                     className="form-control" 
                     accept=" .jpg, .jpeg"
                     id="browse"
                     name="browse" />
                     {/* <label className="input-group-text" 
                     htmlFor="browse">Upload</label>  */}
                    </div>

                    <div className= "col-12">
                    <button className=" btn btn-primary" type= "submit">Submit</button>
                    </div>

                    <br/>
                    <div className= "col-12">
                        <Link to = "./">
                        <button className=" btn btn-primary" type= "submit">Login</button>
                         </Link>
                    </div>

    
                </form>
            </div>
         </div>
       </div>
        </div>
    )
}

export default Registration 