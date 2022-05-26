import React from 'react'
import Head from 'next/head'
export default function account() {
    return (
        <div>
            <script src="/js/admin.js" type="text/javascript"></script>
            <Head>
            <link rel="stylesheet" href="css/account.css" type="text/css" />
            <link rel="stylesheet" href="css/line-awesome.css" type="text/css" />
            </Head>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <a href="/Dashboard">
                        <img src="images/logowhite.png" className="logo logo-xl" alt="logo.png" />
                    </a>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="/Dashboard" className="pt-1"><span className="las la-igloo"></span> <span
                                className="disp-md-none">Dashboard</span></a>
                        </li>
                        <li>
                            <a href="/productup"><span className="las la-clipboard-list"></span> <span
                                className="disp-md-none">Items</span></a>
                        </li>
                        <li>
                            <a href=".accountdashboard"><span className="las la-user-circle"></span> <span
                                className="disp-md-none">Accounts</span></a>
                        </li>
                        <li>
                            <a href="#" className="pt-2 pt-md-2"><span className="las la-sign-out-alt"></span> <span
                                className="disp-md-none">Logout</span></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <header>
                    <h2>
                        <div id="clicking">
                            <label htmlFor="nav-toggle">
                                <span className="las la-bars"></span>
                            </label>
                        </div>
                    </h2>
                    <div className="search-wrapper">
                        <span className="las la-search"></span>
                        <input type="search" placeholder="Search here" />
                    </div>

                    <div className="user-wrapper">
                        <img src="images/FallenCap.jpg" width="40px" height="40px" alt="img.jpg" />
                        <div>
                            <h4>Subham Saha</h4>
                            <small>Seller</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="profile-pic-conatiner">
                        <img src="images/FallenCap.jpg" className="profile-pic" alt="profilepic.jpeg" />
                        <span><i className="las la-pencil-alt"></i></span>
                    </div>
                    <div className="card-account mt-1">
                        <p className="account-font mt-2">Name: Subham Saha</p>
                        <p className="account-font mt-2">Email: sahasubham792@gmail.com</p>
                        <p className="account-font mt-2">Phone: 1234567890</p>
                        <p className="account-font mt-2">Adress: </p>
                        <div className="mt-2">
                            <button type="submit" className="btn-2 btn-purple-2">
                                Edit Details
                            </button>
                        </div>
                    </div>
                </main>
            </div>



        </div>
    )
}
