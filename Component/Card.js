import React from 'react'
import Link from 'next/link'
export const Card = (props) => {
  const { product } = props;
  const productpage=()=>{
    window.location.href=`/product/${product._id}`
  }
  return (
    <div className="" onClick={productpage}>
      
        <div className="col-xl-11 ">
          <div className="card" >
            <img className="card-img-top p-2" style={{ height: 350, width: 362 }} src={product.image} alt="Card image cap" />
            <div className="card-body text-center">
              <h5 className="card-title text-s-4">{product.name}</h5>
              <p className="card-text">Price: $ {product.price}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
