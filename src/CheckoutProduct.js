import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return ( 
<div className="checkoutProduct">
<img src="https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML.jpg" alt="" className="checkoutProduct_image"/>
    <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">HP</p>
        <p className="checkoutProduct_price">30 euro</p>
        <div className="checkoutProduct_rating">⭐️</div>
        <button>Remove from basket</button>
    </div>
</div>
  )
}

export default CheckoutProduct