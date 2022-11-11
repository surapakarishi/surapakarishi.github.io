import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { DELETE,ADD,REMOVE } from "../../redux/actions/Actions";

import data from "../../data";

function Cart(props) {

  const[price,setPrice ] =useState(0);
  console.log('total',price);

  const getData = useSelector((state)=>state.cartReducer.carts)
  // const prods = useSelector((state)=>state.cartReducer.products)
  console.log(getData);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const total = () =>{
    let price = 0;
    getData.map((element,key)=>{
      // let int = parseInt(element.price.substring(1)*element.quantity)
      let int = parseFloat(element.price*element.quantity)
       price = int + price
    });
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart-list">
        <ul>
          {getData.map((item, index) => (
            <li className="cart-item" key={item.id}>
              <div className="cart-item-img">
                <img src={item.image} width="90" height="38" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.name} </span>
              </div>
              <div className="cart-item-qty">
                {item.quantity > 1 ? (
                  <span onClick={() => dispatch(REMOVE(item))}>
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </span>
                ) : (
                  <span className="cart-delete-item" onClick={()=>dispatch(DELETE(item.id))}>
                    <FontAwesomeIcon  icon={["far", "trash-alt"]} />
                  </span>
                )}
                <input type="number" value={item.quantity} disabled />
                <span onClick={() => dispatch(ADD(item))}>
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
              </div>
              <div className="cart-item-price">${item.price * item.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
          <h4>Total :</h4>
          <span>${price}</span>
        </div>
        <div className="cart-shipping">
          <h4>Shipping :</h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
