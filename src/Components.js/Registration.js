import React from 'react'
import useForm from './useForm';
import validateInfo from './validateInfo'

const Registration =() => {

    const {handleChange, values, handleSubmit,errors} = useForm(validateInfo)

    return (
        <div>
            <div className= "my-5">
                <h1 className="text-center">Enter New Developer</h1>
            </div>
            
            <div className="container " >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    
                    <form onSubmit={handleSubmit} >
                    
                    <div class="mb-3">
                    <label htmlFor="ename" 
                    class="form-label">
                    Employee Name</label>
                     <input
                     type="text" 
                     className="form-control" 
                     id="ename" 
                     name= "ename"
                     placeholder="Employee Name" 
                     value = {values.ename}
                     onChange={handleChange}/>
                     {errors.ename && <p>{errors.ename}</p>}
                    </div>
                    

                    <div class="mb-3">
                    <label htmlFor="email" 
                    className="form-label">Email address</label>
                    <input type="text" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value = {values.email}
                    onChange={handleChange}
                    placeholder="name@example.com" />
                    {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className="input-group mb-3">
                     <input type="file" 
                     className="form-control" 
                     id="browse"
                     name="browse" />
                     <label class="input-group-text" 
                     htmlFor="browse">Upload</label> 
                    </div>

                    <div class= "col-12">
                    <button class=" btn btn-primary" type= "submit">Submit</button>
                    </div>
    
                </form>
            </div>
         </div>
       </div>
        </div>
    )
}

export default Registration
