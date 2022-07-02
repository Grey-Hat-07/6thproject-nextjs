import React from 'react'
import { parseCookies } from 'nookies'
import baseUrl from '../helpers/baseUrl';
import { useState, useEffect } from 'react';
import Head from 'next/head'
export default function UserAccount(props) {
    const { user } = parseCookies();
    const { Orders } = props;
    const [Data, setData] = useState();
    Orders.reverse();
    // console.log(Orders)
    useEffect(async () => {
        const res = await fetch(`${baseUrl}/api/Account`);
        const data = await res.json();

        setData(data);
    }, [])
    return (

        <div>
            <script src="js/jQuery.js" type="text/javascript " defer></script>
            <script src="js/bootstrap.js" type="text/javascript " defer></script>
            <script src="js/owl.carousel.js" type="text/javascript " defer></script>
            <Head>
            <link href="css/style.css" type="text/css" rel="stylesheet" />
            <link href="css/style-user.css" type="text/css" rel="stylesheet" />
            <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
            <link href="css/animate.css" type="text/css" rel="stylesheet" />
            <link href="css/font-awesome.css" type="text/css" rel="stylesheet" />
            <link rel="stylesheet" href="css/line-awesome.css" type="text/css" />
            
            </Head>
            
            <main>
                <div className="profile-pic-conatiner">
                    <img src="images/FallenCap.jpg" className="profile-pic" alt="profilepic.jpeg" />
                    <span><i className="las la-pencil-alt"></i></span>
                </div>
                <div className="card-account mt-1">
                    <p className="account-font mt-2">Name: {Data && Data.name}</p>
                    <p className="account-font mt-2">Email: {Data && Data.email}</p>
                    <p className="account-font mt-2">Phone: 1234567890</p>
                    <p className="account-font mt-2">Adress: </p>
                    <div className="mt-2">
                        <button type="submit" className="btn-2 btn-purple-2">
                            Edit Details
                        </button>
                    </div>
                </div>
            </main>

            <main>
    <div className="card-header2">
        <h1>Previous order<span className="las la-history"></span></h1>
    </div>
    <div className="card-account2 over-scroll">
        <div className="card-body">
            <div className="table-respnsive">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Item</td>
                            <td>Price</td>
                            <td>Order Date</td>
                        </tr>
                    </thead>
                    
                    {Orders&&user&&Orders.map((order,index) => {
                        if(order.userId === user){
                            console.log(order)
                            return(
                                <tbody key={index}>
                        <td>
                            {order.products.map((product,id) => {
                                return(
                                    <div key={id}>
                                        {product.productname}<br/>
                                    </div>
                                )
                            })}
                        </td>
                        <td>${order.total}</td>
                        <td>{order.time.toString()}</td>
                        <td>
                            <div className="react">
                                <span className="las la-cart-arrow-down"></span>
                                <span className="lar la-comment"></span>
                            </div>
                        </td>
                    </tbody>
                            )
                        }
                    })
                    }
                </table>
            </div>
        </div>
    </div>
</main>

        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(`${baseUrl}/api/Order`, {
        method: 'GET'
    })
    const data = await res.json()
    return {
        props: {
            Orders: data
        }
    }
}
