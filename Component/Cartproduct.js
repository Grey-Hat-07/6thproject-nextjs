import React from 'react'
import { useState,useEffect } from 'react';
import baseUrl from '../helpers/baseUrl';
export const Cartproduct = (props) => {
    var {product } =props;
    
    const id = product.product;
    const [data, setData] = useState();
    useEffect(async () => {
        const res = await fetch(`${baseUrl}/api/product/${id}`);
        const data = await res.json();
        setData(data);
    }, [id]);
    const updatecartproquatity = async (id,quantity) => {
        let newArr = props.cart.map((item, i) => {
            if (item._id===id) {
                item.quantity = quantity;
            }
            return item;
          });
          props.setCart(newArr);
          

    }
  return (
    <tr>
                        <td>
                            <div className="cart-info">
                                {data &&
                                    <img src={data.image} />}
                                <div className="mt-5 mt-md-4 mt-xs-5 ml-xs-5">
                                    <p className="text-cart-2">{product.productname}</p>
                                    <small className="text-cart-3">Price: ${product.price}.00</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>{data&&
                            <input type="number" min="1" value={product.quantity} max={data.quantity}
                            onChange={(e)=>{updatecartproquatity(product._id,e.target.value)}}
                        />}</td>
                        <td>${product.quantity*product.price}.00</td>
                    </tr>
  )
}
