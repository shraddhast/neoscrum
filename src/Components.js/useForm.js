import {useState , useEffect} from 'react'
import validateInfo from './validateInfo'

const useForm = () => {
    const [values, setValues] = useState({
        ename:'' ,
        email:'',
        password: ''
   })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target
        setValues ({
         ...values,
         [name]: value
        
        })
    }  

    const handleSubmit =(e) => {
        e.preventDefault();

        setErrors(validateInfo(values))
    }
 
   
    return {handleChange, values ,handleSubmit , errors}
}

export default useForm
