import React,{useState, useSyncExternalStore} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  // declare our states here 
const [email, setEmail]=useState("")
const[password,setPassword]=useState("")
// define three states for pod=sting data 
const [loading,setLoading]=useState("")
const [success,setSuccess]=useState("")
const [error,setError]=useState("")

// function to handle submit 
const handlesubmit =async(e)=>{
  e.preventDefault()
  setLoading("please wait...")
// create an empty edigital envelope 
const formdata= new FormData()
formdata.append ("email",email)
formdata.append("password",password)
try{
  const response= await  axios.post("http://higgs.alwaysdata.net/api/signin",formdata)
  setSuccess (response.data.message)
  setLoading("")
  setError("")
}
catch (error){

}
}
  return (
    <div className="row mt-2 justify-content-center">
      <div className="col-md-6 card shadow">
        <h1>Signin</h1>
        {/* bind the states   */}
         <h2 className="text-warning">{loading}</h2>
            <h2 className="text-success">{success}</h2>
            <h2 className="text-danger">{error}</h2>
        <form action="" onSubmit={handlesubmit}>
          <input type="email" placeholder='enter email' className='form-control' onChange={(e)=>setEmail (e.target.value)}/><br /><br />
          <input type="password" placeholder='enter password'className='form-control' onChange={(e)=>setPassword (e.target.value)}/><br /><br />
          <button type="submit" className='btn btn-primary w-100'>Signin</button>
          <p>You don't have an account ? <Link to ="/signup" >Signup</Link></p>
          
        </form>
      </div>
    </div>
  );
}

export default Signin;
