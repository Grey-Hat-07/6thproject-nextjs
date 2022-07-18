import React from 'react'
import Head from 'next/head'
import baseUrl from '../helpers/baseUrl';
import { useState, useEffect } from 'react'
import jsCookie from 'js-cookie'
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Account() {
    const [userData,setUserData] = useState();
    const router = useRouter();
    useEffect(async()=>{
        const res = await fetch(`${baseUrl}/api/Account`);
        const data = await res.json()
        setUserData(data);
    },[])
    const logout=()=>{
        jsCookie.remove('user');
        jsCookie.remove('AdminId');
        router.push('/Login');
    }
    return (
        <div>
            {/* <script src="/js/admin.js" type="text/javascript" defer></script> */}
            <Head>
            <link rel="stylesheet" href="css/account.css" type="text/css"/>
            <link rel="stylesheet" href="css/line-awesome.css" type="text/css" />
            
            </Head>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <Link href="/Dashboard">
                        <img src="images/logowhite.png" className="logo logo-xl" alt="logo.png" />
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
                        <img src="images/FallenCap.jpg" width="40px" height="40px" alt="img.jpg" />
                        <div>
                            <h4>{userData&&userData.name}</h4>
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
                        <p className="account-font mt-2">Name: {userData&&userData.name}</p>
                        <p className="account-font mt-2">Email: {userData&&userData.email}</p>
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
