import React, { useEffect, useState } from "react";
// import data from "../../data";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SETPRODUCTS } from "../../redux/actions/Actions";
import Skeleton from "react-loading-skeleton";

function Product(props) {

   const dispatch = useDispatch();
   const prods = useSelector((state)=>state.cartReducer.products)
  const [data,setData] = useState(prods)
  const fetchProducts = async ()=>{
    const response = await axios
    .get("https://fakestoreapi.com/products/")
    .catch((err)=>{
      console.log("Err",err);
    });
    console.log(response.data);
    dispatch(SETPRODUCTS(response.data))
  };
  useEffect(()=>{
    fetchProducts();
    
    
  },[])
 
  const category=(cat)=>{
     const filter = prods.filter((curData)=>{
      return curData.category===cat;
     });
     console.log(filter);
     setData(filter)
  }
// const Loading=()=>{
//   return(
//     <>
//     <Skeleton/>
//     </>
//   )
// }


  return (

    <div className="products">
      <ul className="cat-checkout-button"> 
      <li><button onClick={()=>setData(prods)}>All</button></li>
      <li><button onClick={()=>category("men's clothing")}>Men's Clothing</button></li>
      <li><button onClick={()=>category("women's clothing")}>Women's Clothing </button></li>
      <li><button onClick={()=>category("electronics")}>Electronics</button></li>
      <li><button onClick={()=>category("jewelery")}>Jewellery</button></li>
      </ul>
      <ProductsHeader />
      
      <div className="products-container">
        <div className="product-cards" dir="ltr">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="related-products">
        <div className="related-products-header">
          <h1>Related Products</h1>
        </div>
        <div className="related-products-card">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
