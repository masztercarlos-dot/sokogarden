import axios from 'axios';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    // declair our state here 
    const [username, setUsername]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword] =useState ("")
    const[phone, setPhone]= useState("")
    // three states for posting data 
    const [loading,setLoading]=useState("")
    const [success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to handle submit 
    const handlesubmit = async (e)=>{
        e.preventDefault()
        setLoading("please wait....")
        // Create an empty digital envelope 
        const formdata= new FormData()
        formdata.append("username", username)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("phone",phone)
        try{
            const response =await axios.post("http://higgs.alwaysdata.net/api/signup",formdata)
            setSuccess(response.data.message)
            setLoading("happy exploration")
        }catch(error){

        }
    }

  return (
    <div className="row mt-2 justify-content-center">
        <div className="col-md-6 card shadow">
            <h1>Signup</h1>
            {/* bind the states  */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-success">{success}</h2>
            <h2 className="text-danger">{error}</h2>

            <form action="" onSubmit={handlesubmit}>
                <input type="text" placeholder='Enter username'className='form-control'onChange={(e)=>setUsername(e.target.value)} /><br /><br />
                <input type="email"placeholder='enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                <input type="password"placeholder='enter password'className='form-control'onChange={(e)=>setPassword(e.target.value)} /><br /><br />
                <input type="phone" placeholder='enter phone' className='form-control'onChange={(e)=>setPhone(e.target.value)} /><br /><br />
                <button type='submit' className="btn  btn-primary w-100">Signup</button><br /><br />
                <p>already an account ? <Link to ="/signin">Signin</Link></p>
            </form>
        </div>
    </div>
  );
}

export default Signup;
