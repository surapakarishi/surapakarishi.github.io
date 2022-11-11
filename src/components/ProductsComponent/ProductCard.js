import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/Actions";


function ProductCard({ product }) {

  const getData = useSelector((state)=>state.cartReducer.carts)
  const prods = useSelector((state)=>state.cartReducer.products)
  // console.log(getData);
  console.log(prods)
 
  const dispatch = useDispatch();

  // const send = (prod)=>{
  //   console.log(prod);
  //   dispatch(ADD(prod));
  // }
  // console.log(dispatch(ADD(product)));

  return (
    <div className="product-card" key={product.id}>
      <div className="product-header">
        <Link to={"/shop/" + product.id}>
          <div className="product-maximize">
            <FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} size="2x" />
          </div>
        </Link>
        <Link to="/cart">
          <span className="product-add-to-cart">

            <FontAwesomeIcon onClick={()=>dispatch(ADD(product))} icon={["fas", "shopping-bag"]} />
          </span>
        </Link>
      </div>
      <div className="product-image">
        <div
          className="background-design"
          // style={{ background: product.colors[0] }}
        >
          <div className="circle"></div>
        </div>
        <figure>
          <img src={product.image} alt="product-img" width="250" height="230" />
        </figure>
      </div>
      <div className="product-name">
        <p>{product.title}</p>
      </div>
      <div className="product-price">${product.price}</div>
    </div>
  );
}

export default ProductCard;
