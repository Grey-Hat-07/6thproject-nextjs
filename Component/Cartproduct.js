import React from 'react'

export const Cartproduct = () => {
  return (
    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="images/PngItem_2331886.png" />
                                <div className="mt-5 mt-md-4 mt-xs-5 ml-xs-5">
                                    <p className="text-cart-2">lorem ipsum</p>
                                    <small className="text-cart-3">Price: $10.00</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" min="1" defaultValue={1} /></td>
                        <td>$10.00</td>
                    </tr>
  )
}
