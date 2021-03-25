import React,{ useState } from 'react'
import useForm from './useForm';
import Registration from './Registration'
import validateInfo from './validateInfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";  
import { faEyeSlash} from "@fortawesome/free-solid-svg-icons";  
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
const Login = ()=> {

    const eye = <FontAwesomeIcon icon={faEye} />;
    const eyeslash = <FontAwesomeIcon icon={faEyeSlash} />;
   // const {handleChange, values, handleSubmit,errors} = useForm(validateInfo)

    const [values, setValues] = useState({
        Loginemail:'',
        Loginpassword:''
   })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name ,value} = e.target;
        setValues ({
         ...values,
         [name]: value
        
        })
     }  

    const handleSubmit =(event) => {
        event.preventDefault()
        
        setError(validateInfo(values))
    }
        

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(passwordShown ? false : true);
      };

     const history =  useHistory()
     const handleLogin =() =>{
        const Email="abc@gmail.com";
        const Password = "abc123456"
        if(Email === values.Loginemail && Password === values.Loginpassword){
            history.push('./dashboard')
        }
    }

    return (
        <div>
             <div className= "my-5">
                <h1 className="text-center">Login</h1>
            </div>
            
            <div className="container text-left" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    
                    <form onSubmit ={handleSubmit}>
                    
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    
                    <input type="text" 
                    className="form-control noti" 
                    id="email"
                    name="Loginemail"
                    value = {values.Loginemail}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    onkeyup="clearErrors()" />
                    <small className="effect">
                    {error.errors == undefined ? "" : <p>{error.errors.Loginemail}</p>}</small>
                    {/* {errors.email && <p>{errors.email}</p>} */}
                    </div>


                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    
                    <div className='input-container'>
                    <input
                    type={passwordShown ? "text" : "password"} 
                    className="form-control " 
                    id="password"
                    name="Loginpassword"
                    value = {values.Loginpassword}
                    onChange={handleChange}
                    placeholder="Password" />
                    <i onClick={togglePassword}>{passwordShown ? eyeslash : eye}</i>
                    </div>
                    <small className="effect">
                    {error.errors == undefined ? "" : <p>{error.errors.Loginpassword}</p>}</small>
                    {/* {errors.password && <p>{errors.password}</p>} */}
                    </div>

                    <div class= "mb-3">
                    <button class=" btn btn-primary align-center" type= "submit"
                    onClick={handleLogin}>Login</button>
                    </div>

                    <div> <p className="noti">
                        Are you a new user? If yes then </p>

                        <div class= "mb-3">
                        <Link to = "./Registration" >
                        <button class=" btn btn-primary" type= "submit"> Signup </button> 
                        </Link> 
                        </div>
                    </div>
                </form>
            </div>
         </div>
       </div>

        </div>
    )
}

export default Login

