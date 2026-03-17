import axios from 'axios';
import React,{useState} from 'react';
import { Form } from 'react-bootstrap';

const Addproduct = () => {
    // declare our sates here 
    const [product_name,setProduct]= useState("")
    const [product_description,setProductDescription]=useState("")
    const[product_cost,setproductCost]=useState("")
    const[product_photo,setProductphoto]=useState("")

    // 3 states for posting data 
    const [loading,setLoading]=useState("")
    const[success , setSuccess]=useState("")
    const[error,setError]=useState("")

    // function to handle submit 
    const handleSubmit =async (e)=>{
       e.preventDefault()
       setLoading("please wait...")
    //    create a digital envelope 
    const formdata =new FormData()
    formdata.append('product_name', product_name)
    formdata.append('product_description',product_description)
    formdata.append('product_cost',product_cost)
    formdata.append('product_photo',product_photo)
    try{
       const response= await  axios.post("http://carloskifaru.alwaysdata.net/api/add_product",formdata)
        setSuccess(response.data.message)
        setLoading("")
        setError("")
    }
    catch(error){

    }

    } 
  return (
    <div className='row justify-content-center mt-2'>
        <div className="col-md-6 card shadow p-8">
            <h1 className='text-danger'>Add Products</h1>
            {/* bind the states  */}
            <h2 className='text-warning'>{loading}</h2>
            <h2 className="text-success">{success}</h2>
            <h2 className="text-danger">{error}</h2>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter product name'className='form-control' onChange={(e)=>setProduct(e.target.value)}/> <br /><br />
                <textarea name="" id="" placeholder='Enter product description' className='form-control' onChange={(e)=>setProductDescription(e.target.value)}></textarea><br /><br />
                <input type="number" placeholder='Enter product cost' className='form-control'onChange={(e)=>setproductCost(e.target.value)} /><br /><br />
                <input type="file" accept='image/*' className='form-control' onChange={(e)=>setProductphoto(e.target.files[0])}/><br /><br />
                <button type='submit' className='btn btn-primary w-100'>Add product</button>
            </form>
        </div>

    </div>
  );
}

export default Addproduct;
