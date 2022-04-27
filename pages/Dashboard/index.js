import React from 'react'
import Head from 'next/head'
export default function index() {
    return (
        <div>
            <script src="js/admin.js" type="text/javascript"></script>
            <Head>
                <link rel="stylesheet" href="css/dashboard-cus.css" type="text/css" />
                <link rel="stylesheet" href="css/line-awesome.css" type="text/css" />
            </Head>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <a href="index.html">
                        <img src="images/logowhite.png" className="logo" alt="logo.png" />
                    </a>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="#" className="pt-1"
                            ><span className="las la-igloo"></span> <span>Dashboard</span></a
                            >
                        </li>
                        <li>
                            <a href="#"
                            ><span className="las la-clipboard-list"></span> <span>Items</span></a>
                        </li>
                        <li>
                            <a href="#"
                            ><span className="las la-shopping-bag"></span>
                                <span>Inventory</span></a
                            >
                        </li>

                        <li>
                            <a href="#"
                            ><span className="las la-user-circle"></span> <span>Accounts</span></a
                            >
                        </li>
                        <li>
                            <a href="#" className="pt-2"
                            ><span className="las la-sign-out-alt"></span> <span>Logout</span></a
                            >
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <header>
                    <h2>
                        <div id="clicking">
                            <label for="nav-toggle">
                                <span className="las la-bars"></span>
                            </label>
                        </div>
                        Dashboard
                    </h2>
                    <div className="search-wrapper">
                        <span className="las la-search"></span>
                        <input type="search" placeholder="Search here" />
                    </div>

                    <div className="user-wrapper">
                        <img
                            src="images/FallenCap.jpg"
                            width="40px"
                            height="40px"
                            alt="img.jpg"
                        />
                        <div>
                            <h4>Subham Saha</h4>
                            <small>Seller</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="cards">
                        <div className="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span className="las la-users"></span>
                            </div>
                        </div>

                        <div className="card-single">
                            <div>
                                <h1>100</h1>
                                <span>Affiliate point</span>
                            </div>
                            <div>
                                <span className="las la-clipboard-list"></span>
                            </div>
                        </div>

                        <div className="card-single">
                            <div>
                                <h1>124</h1>
                                <span>Orders</span>
                            </div>
                            <div>
                                <span className="las la-shopping-bag"></span>
                            </div>
                        </div>

                        <div className="card-single">
                            <div>
                                <h1>$5k</h1>
                                <span>Income</span>
                            </div>
                            <div>
                                <span className="lab la-google-wallet"></span>
                            </div>
                        </div>
                    </div>

                    <div className="recent-grid">
                        <div className="items">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Add items</h3>
                                    <button>
                                        <a href="#" className="text-1">
                                            Click here <span className="las la-arrow-right"></span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Affiliate progress</h3>
                                        <button><a href="#" className="text-1">
                                            Know more <span className="las la-arrow-right"></span>
                                        </a>
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="progress">
                                            <div className="outer">
                                                <div className="inner">
                                                    <div id="number">

                                                    </div>
                                                </div>
                                            </div>

                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                <defs>
                                                    <linearGradient>
                                                        <stop offset="0%" stop-color="#e91e63" />
                                                        <stop offset="100%" stop-color="#673ab7" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Recent orders</h3>
                                    <button><a href="#" className="text-1">
                                        Show more <span className="las la-arrow-right"></span>
                                    </a>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    <td>Item</td>
                                                    <td>Price</td>
                                                    <td>Delivery Status</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status purple"></span>
                                                        delivered
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status pink"></span>
                                                        on way
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status orange"></span>
                                                        Shipped
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status purple"></span>
                                                        delivered
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status pink"></span>
                                                        on way
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status orange"></span>
                                                        Shipped
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status purple"></span>
                                                        delivered
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status pink"></span>
                                                        on way
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>lorem ipsum</td>
                                                    <td>100</td>
                                                    <td>
                                                        <span className="status orange"></span>
                                                        Shipped
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="customers">
            <div className="card">
              <div className="card-header">
                <h3>New customer</h3>
                <button>
                  See all <span className="las la-arrow-right"></span>
                </button>
              </div>
              <div className="card-body">
                <div className="customer">
                  <div className="info">
                    <img
                      src="images/FallenCap.jpg"
                      width="40px"
                      height="40px"
                      alt="img.jpg"
                    />
                    <div>
                      <h4>FallenCap</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div className="contact">
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="customer">
                  <div className="info">
                    <img
                      src="images/FallenCap.jpg"
                      width="40px"
                      height="40px"
                      alt="img.jpg"
                    />
                    <div>
                      <h4>FallenCap</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div className="contact">
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="customer">
                  <div className="info">
                    <img
                      src="images/FallenCap.jpg"
                      width="40px"
                      height="40px"
                      alt="img.jpg"
                    />
                    <div>
                      <h4>FallenCap</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div className="contact">
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="customer">
                  <div className="info">
                    <img
                      src="images/FallenCap.jpg"
                      width="40px"
                      height="40px"
                      alt="img.jpg"
                    />
                    <div>
                      <h4>FallenCap</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div className="contact">
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="customer">
                  <div className="info">
                    <img
                      src="images/FallenCap.jpg"
                      width="40px"
                      height="40px"
                      alt="img.jpg"
                    />
                    <div>
                      <h4>FallenCap</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div className="contact">
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="customer">
                  <div className="info">
                    <img
                      src="images/FallenCap.jpg"
                      width="40px"
                      height="40px"
                      alt="img.jpg"
                    />
                    <div>
                      <h4>FallenCap</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div className="contact">
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>
            </div>
          </div> -->*/}
                    </div>
                </main>
            </div>
        </div>
    )
}
