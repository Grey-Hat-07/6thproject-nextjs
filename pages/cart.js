import React from 'react'
import Head from 'next/head'
export default function cart() {
    return (
        <div>
            <Head>
                <link href="css/cart.css" type="text/css" rel="stylesheet" />
                <link href="css/style.css" type="text/css" rel="stylesheet" />
                <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
                <link href="css/animate.css" type="text/css" rel="stylesheet" />
                <link href="css/font-awesome.css" type="text/css" rel="stylesheet" />
                <script src="js/jQuery.js" type="text/javascript"></script>
                <script src="js/bootstrap.js" type="text/javascript"></script>
                <script src="js/wow.js"></script>
            </Head>
            <div class="container cart-page">
                <table>
                    <tr class="border-bottom-cart">
                        <th class="pl-6 text-cart-1">Product</th>
                        <th class="text-cart-1">Quantity</th>
                        <th class="text-cart-1 text-right">Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="images/PngItem_1397101.png" />
                                <div class="mt-5 mt-md-4 mt-xs-5 ml-xs-5">
                                    <p class="text-cart-2">lorem ipsum</p>
                                    <small class="text-cart-3">Price: $10.00</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$10.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="images/Multi-Start-Pet-Syrup_-Chicken-Flavour_-200-ml1.png" />
                                <div class="mt-5 mt-md-4 mt-xs-5 ml-xs-5">
                                    <p class="text-cart-2">lorem ipsum</p>
                                    <small class="text-cart-3">Price: $10.00</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$10.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="images/PngItem_2331886.png" />
                                <div class="mt-5 mt-md-4 mt-xs-5 ml-xs-5">
                                    <p class="text-cart-2">lorem ipsum</p>
                                    <small class="text-cart-3">Price: $10.00</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$10.00</td>
                    </tr>
                </table>

                <div class="total-price">
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
                <div class="row">
                    <div class="col-xl-12 text-right mt-5">
                        <button type="button" class="btn-2 btn-pink">
                            <a href="#">Buy Now</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
