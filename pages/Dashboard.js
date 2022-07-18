import React from 'react'
import Head from 'next/head'
import { useEffect,useState } from 'react';
import baseUrl from '../helpers/baseUrl';
import jsCookie from 'js-cookie'
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Dashboard(props) {
    const { Orders } = props;
    const [counts,setCount] = useState({});
    const [userData,setUserData]= useState();
    let length =0;
    const router = useRouter();
    useEffect(async() => {
        const res =await fetch(`${baseUrl}/api/Count`);
        const count = await res.json();
        setCount(count);

    }, [])
    useEffect(async()=>{
        const res = await fetch(`${baseUrl}/api/Account`);
        const data = await res.json()
        setUserData(data);
    },[])
    Orders.reverse();
    const logout=()=>{
        jsCookie.remove('user');
        jsCookie.remove('AdminId');
        router.push('/Login');
    }
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/css/dashboard-cus.css" type="text/css" />
                <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
                {/* <script src="/js/jQuery.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js" type="text/javascript"></script>
            <script src="/js/admin.js" type="text/javascript"></script> */}
            </Head>

            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <Link href="/Dashboard"><a>
                        <img src="images/logowhite.png" className="logo logo-xl" alt="logo.png" /></a>
                    </Link>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <div onClick={async()=>{    window.location.href="/Dashboard"}} className="pt-1">
                                <a href='#'>
                                <span className="las la-igloo"></span>
                                <span className="disp-md-none">Dashboard</span></a>
                            </div>
                        </li>
                        <li>
                            <div onClick={async()=>{window.location.href="/productup"}} >
                                <a href='#'>
                                <span className="las la-clipboard-list"></span>
                                <span className="disp-md-none">Items</span></a>
                            </div>
                        </li>
                        <li>
                            <div onClick={async()=>{window.location.href="/accountdashboard"}}>
                                <a href='#'>
                                <span className="las la-user-circle"></span>
                                <span className="disp-md-none">Accounts</span></a>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="" onClick={logout}>
                                <span className="las la-sign-out-alt"></span>
                                <span className="disp-md-none">Logout</span>
                            </a>
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
                        <img
                            src="images/FallenCap.jpg"
                            width="40px"
                            height="40px"
                            alt="img.jpg"
                        />
                        <div>
                            <h4>{userData&&userData.name}</h4>
                            <small>Seller</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="cards">
                        <div className="card-single">
                            <div>
                                <h1>{counts.user}</h1>
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
                                <h1>{counts.order}</h1>
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
                                        <a onClick={async()=>{await router.push('/productup')}} className="text-1">
                                            Click here <span className="las la-arrow-right"></span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Business progress</h3>
                                        <button><a href="#" className="text-1">
                                            Know more <span className="las la-arrow-right"></span>
                                        </a>
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="disp-flex disp-xl-grid disp-md-flex disp-xs-grid">
                                            <div className="pl-3 pl-xl-1 pl-sm-1 pl-xs-1">
                                                <div className="progress">
                                                    <div className="outer">
                                                        <div className="inner">
                                                            <div id="number-1">

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                        <defs>
                                                            <linearGradient>
                                                                <stop offset="0%" stopColor="#e91e63" />
                                                                <stop offset="100%" stopColor="#673ab7" />
                                                            </linearGradient>
                                                        </defs>
                                                        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="pl-2 pl-xl-1 pt-xl-1 pt-md-1 pl-xs-1 pt-xs-1">
                                                <div className="progress">
                                                    <div className="outer">
                                                        <div className="inner">
                                                            <div id="number-2">

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                        <defs>
                                                            <linearGradient>
                                                                <stop offset="0%" stopColor="#e91e63" />
                                                                <stop offset="100%" stopColor="#673ab7" />
                                                            </linearGradient>
                                                        </defs>
                                                        <circle className="color-1" cx="80" cy="80" r="70" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Monthly Sales</h3>
                                        <button>
                                            <a href="#" className="text-1">
                                                Show more <span className="las la-arrow-right"></span>
                                            </a>
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <canvas id="myChart" width="400" height="200"></canvas>
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
                                                    <td>Email</td>
                                                    <td>Price</td>
                                                    <td>Delivery Status</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Orders.map((order, index) => {
                                                    if(length<10){
                                                        length++;
                                                    return (<tr key={index}>
                                                            <td>{order.email}</td>
                                                            <td>{order.total}</td>
                                                            <td>
                                                                <span className="status purple"></span>
                                                                {length%2===0?<>delivered</>:length%3===0?<>shipped</>:<>on the way</>}  
                                                                

                                                            </td>
                                                        </tr>
                                                    )}
                                                })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </main>


            </div>
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
