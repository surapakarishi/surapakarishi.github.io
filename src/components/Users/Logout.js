import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    let history = useHistory();
    // let storage = localStorage.getItem('email')
 
    const clearStorage=()=>{
       
       sessionStorage.removeItem('email')
       history.push('/login')
    }

  return (
    
        <div className="cart-checkout">
      <br/> 
      <div className="cart-total"><h4>Do You Really Want to Logout ?</h4></div>
        <div className="cart-checkout-button">
        <button onClick={clearStorage}>Logout</button>
        </div>
    
        </div>

  )
}

export default Logout