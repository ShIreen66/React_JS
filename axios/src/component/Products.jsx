import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [products, setProducts] = useState(null);
  const GetProducts = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProducts();
    console.log("Product.jsx | Mounted");

    return () => {
      console.log("Product.jsx | UnMounted");
    };
  }, [isAccept]);

  //   useEffect(() => {
  //     GetProducts()
  //   }, [])

  return (
    <div>
      <h1 className="text-2xl mx-2">axios</h1>
      <button onClick={() => setIsAccept(!isAccept)}>Change Value</button>
      <h1>{isAccept ? "Hello" :"No Hello "}</h1>
    </div>
  );
};

export default Products;
