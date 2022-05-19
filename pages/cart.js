import React from 'react'
import Head from 'next/head'
import baseUrl from '../helpers/baseUrl'
import {useEffect, useState} from 'react'
export default function Cart() {
    const [cart, setCart] = useState()
    useEffect(async() => {
        const res = await fetch(`${baseUrl}/api/cart`,{
            method: "GET"
        });
        const data = await res.json();
        console.log(data);
        setCart(data);
    })
    
    return (
        <div>
            <Head>
                <link href="css/cart.css" type="text/css" rel="stylesheet" />
                <link href="css/style.css" type="text/css" rel="stylesheet" />
                <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
                <link href="css/animate.css" type="text/css" rel="stylesheet" />
                <link href="css/font-awesome.css" type="text/css" rel="stylesheet" />
            </Head>
            <script src="js/jQuery.js" type="text/javascript"></script>
            <script src="js/bootstrap.js" type="text/javascript"></script>
            <script src="js/wow.js"></script>
            <div className="container cart-page">
                <table>
                    <tr className="border-bottom-cart">
                        <th className="pl-6 text-cart-1">Product</th>
                        <th className="text-cart-1">Quantity</th>
                        <th className="text-cart-1 text-right">Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="images/PngItem_1397101.png" />
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
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="images/Multi-Start-Pet-Syrup_-Chicken-Flavour_-200-ml1.png" />
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
                    
                </table>

                <div className="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$100.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$35.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$135.00</td>
                        </tr>
                    </table>
                </div>
                <div className="row">
                    <div className="col-xl-12 text-right mt-5">
                        <button type="button" className="btn-2 btn-pink">
                            <a href="#">Buy Now</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// export async function getServerSideProps(context) {
//     var res = await fetch(`${baseUrl}/api/cart`,{
//         method: "GET"
//     });
//     var data = await res.json();
//     return {
//       props: {
//         data
//       }
//     }
//   }
  