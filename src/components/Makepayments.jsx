import axios from 'axios'
import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
const Makepayments = () => {
    const{singleproduct}=useLocation().state || {}
  const imagepath ="http://carloskifaru.alwaysdata.net/static/images/"  
    const [phone, setPhone]=useState("")

    // states for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const handlesubmit = async (e)=>{
        e.preventDefault ()
        setLoading("please wait...")
        // create an empty digital envelope 
        const formdata =new FormData()
        formdata .append ("phone",phone)
        formdata.append("amount", singleproduct.product_cost)
      try{
        const response=await axios.post ("http://carloskifaru.alwaysdata.net/api/mpesa_payment",formdata)
        setSuccess(response.data.message)
        setLoading("")
      }catch (error){
        setError(error.message)
        setLoading("")
      }
    }
  return (
    <div className="row justify-content-center">
        <h1 className='text-success'><i>Make payment- Lipa Na mpesa</i></h1>
        <div className='col-md-8  card shadow p-4 bg-black'>
        {/* image goes here  */}
        <img src={imagepath + singleproduct.product_photo} alt="" style={{height :"200px",objectFit:"contain"}} />

        <h5 className="text-info text-start">{singleproduct.product_name}</h5>
        <p className="text-start text-white">{singleproduct.product_description}</p>
        <b className="text-start text-danger">{singleproduct.product_cost}$</b>
        {/* bind the state  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" className="form-control"  placeholder='Enter phone +254XXXXXXXX'onChange={(e)=>setPhone(e.target.value)}/><br /><br />
            
            <button type='submit' className="btn btn-primary w-100">Make Payment</button>
        </form>
        </div>

    </div>
  )
}

export default Makepayments