export default function validateInfo(values){

    let errors = {}
 
    if(values.ename == "") {
         errors.ename= "Name required"
     }
     else if (! /^[A-Za-z]+$/.test(values.ename)){
        errors.ename = "Only Alphabets are allowed" 
     }
    
     if(!values.email) {
         errors.email = "Email required"
     } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email) ) 
     {
         errors.email = "Not a valid Email" 
     }
     if(values.password == ""){
         errors.password ="Enter Password"
     }
     else if((values.password.length <= 8) || (values.password.length > 12)){
        errors.password ="Password length should be between 8-12"
    }
    else if(!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(values.password)){
    errors.password = "Password should be Alphanumeric"
    }

     return {errors};
}

