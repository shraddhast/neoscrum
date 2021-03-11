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
        const { name ,value} = e.target;
        setValues ({
         ...values,
         [name]: value
        
        })
    }  

    const handleSubmit =(event) => {
        console.log("handelsubmit")
        event.preventDefault()
        
        setErrors(validateInfo(values))
    }
 
    console.log(errors)
    return {handleChange, values ,handleSubmit , errors}
}

export default useForm