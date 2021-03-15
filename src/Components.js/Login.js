import React,{ useState } from 'react'
import useForm from './useForm';
import Registration from './Registration'
import validateInfo from './validateInfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";  
import { faEyeSlash} from "@fortawesome/free-solid-svg-icons";  
import { Link } from 'react-router-dom';

const Login = ()=> {

    const eye = <FontAwesomeIcon icon={faEye} />;
   const eyeslash = <FontAwesomeIcon icon={faEyeSlash} />;
    const {handleChange, values, handleSubmit,errors} = useForm(validateInfo)

    const [passwordShown, setPasswordShown] = useState(false);


    const togglePassword = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    

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
                    name="email"
                    value = {values.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    onkeyup="clearErrors()" />
                    <small className="effect">
                    {errors.errors == undefined ? "" : <p>{errors.errors.email}</p>}</small>
                    {/* {errors.email && <p>{errors.email}</p>} */}
                    </div>


                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    
                    <div className='input-container'>
                    <input
                    type={passwordShown ? "text" : "password"} 
                    className="form-control " 
                    id="password"
                    name="password"
                    value = {values.password}
                    onChange={handleChange}
                    placeholder="Password" />
                     <i onClick={togglePassword}>{passwordShown ? eyeslash : eye}</i>
                    </div>
                    <small className="effect">
                    {errors.errors == undefined ? "" : <p>{errors.errors.password}</p>}</small>
                    {/* {errors.password && <p>{errors.password}</p>} */}
                    </div>

                    <div class= "col-12">
                    <button class=" btn btn-primary" type= "submit">Login</button>
                    </div>

                    <div> <br/> <p className="noti">
                        Are you a new user? If yes then </p>

                         <div class= "col-12">
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

   

