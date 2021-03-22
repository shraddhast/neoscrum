import React from 'react'
import Navbar from './Navbar'
import Addfeedback from "./Addfeedback"
import Addfeedbackdata from './Addfeedbackdata'

function Dashboard2() {
    return (
        <div>
            <Navbar/>
        
            <div class='row'>{

                Addfeedbackdata.map((value,index)=> {
                return <Addfeedback name={value.name} image={value.image}  />
            })}
            </div>
        </div>
    )
}
export default Dashboard2
