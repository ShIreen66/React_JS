import { Outlet, useNavigate } from "react-router-dom"
import Page from "./Page"


const Product = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate('/product/detail')
  }
  return (
    <div >
      <div>
      <h1>This is a Product page</h1>
      <h1>This is a Product page</h1>
      <h1>This is a Product page</h1>
      <h1>This is a Product page</h1>

      <button onClick={navigateHandler}>See Details</button>
      
     </div> 
     <Outlet/>

      <Page/>
    </div>
  
  )
}

export default Product