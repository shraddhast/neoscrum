import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validateInfo from './validateInfo'


const Registration =() => {

    //const {handleChange, values, handleSubmit,errors} = useForm(validateInfo)

    const [values, setValues] = useState({
        ename:'' ,
        email:''
   })


    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name ,value} = e.target;
        setValues ({
         ...values,
         [name]: value
         
        })
    }  


    const setData =()=> {

      const user = JSON.parse(localStorage.getItem("user") || "[]");
      const userlist = [...user]
        
         if(userlist.length === 0){
             userlist.push(values)
            localStorage.setItem('user',JSON.stringify(userlist))
            }
            else{
                let newlist = userlist.filter((val)=>{
                    return val.email == values.email
                    
                })
                console.log(newlist)
                if(newlist.length !== 0 ){
                    alert("alreay existing email")}
                else{
                    userlist.push(values)
                    localStorage.setItem("user",JSON.stringify(userlist))
                }
            }
}

// for(let i=0; i<user.length; i++){
                //             if(user[i] === values.email){
                //                  alert('already existing user')
                //                  break;
                //              }
                //             else{
                //                   user.push(values)
                //                  localStorage.setItem('user',JSON.stringify(user))   
                //              }   
                //          }

    const handleSubmit =(event) => {
        event.preventDefault()
        
        setError(validateInfo(values))
        //validateuser() ;
       // console.log('handleChange',values)
        setData();
 }

    return (
        <div>
            <div className= "my-5">
                 <h1 className="text-center">Enter New Developer</h1>
            </div>
            
            <div className="container text-left" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    
                    <form onSubmit={handleSubmit}>
                    
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
                     {error.errors == undefined ? "" : <p>{error.errors.ename}</p>}</small>
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
                     {error.errors == undefined ? "" : <p>{error.errors.email}</p>}</small>
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

                    <div className= "mb-3">
                    <button className=" btn btn-primary" type="submit">Submit</button>
                    </div>

                    
                    <div className= "mb-3">
                        <p className="noti">If already registered then</p>
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