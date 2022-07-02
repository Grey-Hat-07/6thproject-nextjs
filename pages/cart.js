import React from 'react'
import Head from 'next/head'
import { Cartproduct } from '../Component/Cartproduct'
import baseUrl from '../helpers/baseUrl'
import { useRouter } from 'next/router'
import { Card } from '../Component/Card'
import { useEffect, useState } from 'react'
// import jsCookie from 'js-cookie'
export default function Cart(props) {

    const [cart, setCart] = useState();
    const [userData, setUserData] = useState();
    // const router = useRouter();
    let total = 0;
    //useEffect section
    useEffect(async () => {
        const res = await fetch(`${baseUrl}/api/Cart`);
        const cartdata = await res.json();
        setCart(cartdata.products);
        console.log(cart)
    }, []);
    useEffect(async () => {
        const res = await fetch(`${baseUrl}/api/Account`);
        const usedata = await res.json();
        setUserData(usedata);
    }, []);


    const createOrder = async ({ paymentId, razorpayOrderId }) => {
        const res = await fetch(`${baseUrl}/api/Order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            products: cart,
            email: userData.email,
            total: total,
            paymentId,
            razorpayOrderId,
            cart:true
          })
        });
        const res2 = await res.json();
        if (res2) {
          window.location.href='/'
        }
      }
      // razorpay section
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };
      const makePayment = async () => {
        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch(`${baseUrl}/api/Razorpay`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            total : total
          })
        }).then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Paw Life",
          currency: data.currency,
          amount: total,
          order_id: data.id,
          description: "Join our revolution",
          image: "/images/logo.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            createOrder({ paymentId: response.razorpay_payment_id, razorpayOrderId: response.razorpay_order_id });

          },
          prefill: {
            name: userData.name,
            email: userData.email
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
    return (
        <div>
          <Head>
            <link href="/css/cart.css" type="text/css" rel="stylesheet" />
            <link href="/css/style.css" type="text/css" rel="stylesheet" />
            <link href="/css/bootstrap.css" type="text/css" rel="stylesheet" />
            <link href="/css/animate.css" type="text/css" rel="stylesheet" />
            <link href="/css/font-awesome.css" type="text/css" rel="stylesheet" />
            <script src="js/jQuery.js" type="text/javascript" defer></script>
            <script src="js/bootstrap.js" type="text/javascript" defer></script>
            <script src="js/wow.js" defer></script>
            </Head>
            <div className="container cart-page">
                <table>
                    <tr className="border-bottom-cart">
                        <th className="pl-6 text-cart-1">Product</th>
                        <th className="text-cart-1">Quantity</th>
                        <th className="text-cart-1 text-right">Subtotal</th>
                    </tr>

                    {
                        cart ?cart.length>0? cart.map((item, index) => {
                            total = total + item.quantity * item.price;
                            return (
                                <Cartproduct key={index} product={item} setCart={setCart} cart={cart} />
                            )
                        }) : <tr><td><h2>No Product</h2></td></tr>:<tr><td><h2>No Product</h2></td></tr>

                    }


                </table>

                <div className="total-price">
                    <table>
                        {/* <tr>
                            <td>Subtotal</td>
                            <td>${total}.00</td>
                        </tr> */}
                        {/* <tr>
                            <td>Tax</td>
                            <td>${total*0.10}.00</td>
                        </tr> */}
                        <tr>
                            <td>Total</td>
                            <td>${total}.00</td>
                        </tr>
                    </table>
                </div>
                <div className="row">
                    <div className="col-xl-12 text-right mt-5">
                        <button type="button" className="btn-2 btn-pink" onClick={makePayment}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

