import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Getproducts = () => {
    let navigate=useNavigate()
    // dclare our sates here 
    const [loading,setLoading]=useState("")
    const[products,setProduct]=useState([])
    const[error,setError]=useState("")

    // function to get products 
    const getproducts =async ()=>{
        setLoading("please wait...")
        try {
        const response = await axios.get ("http://carloskifaru.alwaysdata.net/api/getproducts")
        setProduct(response.data)
        setLoading("")
        } catch (error) {
        
    }
}
// call the function 
useEffect(()=>{
    getproducts()
}, [])
  console.log(products);
  const imagepath ="http://carloskifaru.alwaysdata.net/static/images/"  
  return (
    <div className="container-fluid lobster-two-regular">
        <div className="row">
            <h1 className='text-info'>avilable products</h1>
            {/* bind the states  */}
            <h2 className='text-warning text-center'>{loading}</h2>
            <h2 className='text-danger text-center'>{error}</h2>
            {products.map(singleproduct=>(
                <div className="col-md-3  mb-3  ">
                    <div className="card shadow h-100">

                    
                    {/* image goes here  */}
                    <img src={imagepath + singleproduct.product_photo} alt="" style={{height: "200px"}}/>
                    {/* card body goes here  */}
                    <div className="card-body bg-dark  text-white">
                        {/* product name goes here  */}
                         <h1>{singleproduct.product_name}</h1>
                        {/* product description goes here  */}
                        <p className='text-'>{singleproduct.product_description}</p>
                        {/* product cost goes here  */}
                        <b className='text-danger '>{singleproduct.product_cost}</b><br />
                        {/* pirchase now button goes here  */}
                        <button className='btn btn-success w-100' onClick={()=> navigate("/makepayment", {state:{singleproduct}})}>purchase now</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Getproducts