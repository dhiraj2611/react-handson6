import React, { useContext } from 'react'
import { add } from './Details'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const NewStudents = () => {

const[Name,setName]=useState("")

const[Age,setAge]=useState("")


const[Course,setCourse]=useState("")


const[Batch,setBatch]=useState("")

const[students,setStudents]=useContext(add)


const ChangeHandler1=(e)=>
{
setName(e.target.value)

}
const ChangeHandler2=(e)=>
{
setAge(e.target.value)

}
const ChangeHandler3=(e)=>
{
setCourse(e.target.value)

}
const ChangeHandler4=(e)=>
{
setBatch(e.target.value)

}

const SubmitHandler=()=>{


setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])


}
  return (
    <div>


<div className='addbox'>

<label className='num1'>Name:</label>
<input className='num2' id="name" type="text" name='name' placeholder='Name' value={Name} onChange={ChangeHandler1} /> 
<label className='num1'>Age:</label>
<input className='num2' id="age" type="text" name='age' placeholder='Age' value={Age} onChange={ChangeHandler2} /> <br /><br />
<label className='num1'>Course:</label>
<input className='num2' id="course" type="text" name='course' placeholder='Course' value={Course} onChange={ChangeHandler3} /> 
<label className='num1'>Batch:</label>
<input className='num2' id="batch" type="text" name='batch' placeholder='Batch' value={Batch} onChange={ChangeHandler4} />

</div>

<div>

<Link className='cancel' to="/Student">Cancel</Link>
<Link className='submit' to="/Student" onClick={SubmitHandler}>Submit</Link>

</div>



   
    </div>
    
  )
 
}




export default NewStudents;