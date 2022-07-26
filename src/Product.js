import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product_info">
                <p>Title</p>
                <p className="product_price">30 euro</p>
                <div className="product_rating">⭐️</div>
            </div>
            <img src="https://www.homefurniturelife.com/wp-content/uploads/2022/04/51KmGpgSZAL._AC_SL1009_.jpg" alt="" />
            <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product