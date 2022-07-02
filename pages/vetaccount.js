import React from 'react'
import { useState,useEffect } from 'react';
import baseUrl from '../helpers/baseUrl';
import jsCookie from 'js-cookie'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
export default function Vetaccount() {
    const [data, setData] = useState([]);
    const router = useRouter();
    const logout = () => {
        jsCookie.remove('user');
        jsCookie.remove('vet');
        router.push('/Login');
    }
    useEffect(async()=>{
        const res = await fetch(`${baseUrl}/api/Account`);
        const data = await res.json();
        setData(data);
    },[])


    return (
        <div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js" type="text/javascript" defer></script>
            <script src="/js/admin.js" type="text/javascript" defer></script>
            <script src="/js/jQuery.js" type="text/javascript" defer></script>
            <Head>
            <link rel="stylesheet" href="/css/vet-dashboard.css" type="text/css" />
            <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
            </Head>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
            <div className="sidebar-brand">
          <Link href="/vet-dashboard">
            <img
              src="images/logowhite.png"
              className="logo-vet logo-xl"
              alt="logo.png"
            />
          </Link>
        </div>

                <div className="sidebar-menu">
                    <ul>
                    <li><div onClick={async()=>{
              await router.push("/vet-dashboard");
            }}>
              <a href="#" className="pt-1">
                <i className="las la-comments"></i>{" "}
                <span className="disp-md-none">Consult</span>
              </a></div>
            </li>
            <li>
            <div onClick={async()=>{
              await router.push("/vetaccount");
            }}>
              <a href="#">
                <span className="las la-user-circle"></span>{" "}
                <span className="disp-md-none">Accounts</span>
              </a></div>
            </li>
                        <li>
                            <a href="#" onClick={logout}><span className="las la-sign-out-alt"></span> <span
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
                            <h4>{data&&data.name}</h4>
                            <small>Vet</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="profile-pic-conatiner">
                        <img src="images/FallenCap.jpg" className="profile-pic" alt="profilepic.jpeg" />
                        <span><i className="las la-pencil-alt"></i></span>
                    </div>
                    <div className="card-account mt-1">
                        <p className="account-font mt-2">Name: {data&&data.name}</p>
                        <p className="account-font mt-2">Email: {data&&data.email}</p>
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
