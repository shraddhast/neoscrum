import React,{ useState } from 'react'
import useForm from './useForm';
import validateInfo from './validateInfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = ()=> {

    const eye = <FontAwesomeIcon icon={faEye} />;
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
            
            <div className="container " >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    
                    <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    
                    <input type="text" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value = {values.email}
                    onChange={handleChange}
                    placeholder="name@example.com" />
                    {errors.email && <p>{errors.email}</p>}
                    </div>

                    {/* <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    
                    <div className='input-container'>
                    <input type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    value = {values.password}
                    onChange={handleChange}
                    placeholder="Password" />
                    <span class="material-icons visibility">visibility</span>
                    </div>
                    {errors.password && <p>{errors.password}</p>}
                    </div> */}

                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    
                    <div className='input-container'>
                    <input
                    type={passwordShown ? "text" : "password"} 
                    className="form-control" 
                    id="password"
                    name="password"
                    value = {values.password}
                    onChange={handleChange}
                    placeholder="Password" />
                     <i onClick={togglePassword}>{eye}</i>
                    </div>
                    {errors.password && <p>{errors.password}</p>}
                    </div>

                    


                    
                    <div class= "col-12">
                    <button class=" btn btn-primary" type= "submit">Login</button>
                    </div>
    
                </form>
            </div>
         </div>
       </div>

        </div>
    )
}

export default Login
