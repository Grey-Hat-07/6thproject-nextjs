import React from 'react'
export const Card = (props) => {
    const { product } = props
  return (
    <div className=" mt-3">
          <div className="col-xl-10 ">
          <div className="card" >
            <img className="card-img-top p-2" style={{height: 350, width:372}} src={product.image} alt="Card image cap" />
            <div className="card-body text-center">
              <h5 className="card-title text-s-4">{product.name}</h5>
              <p className="card-text">Price: $ {product.price}</p>
            </div>
          </div>
          </div>
        </div>
  )
}
