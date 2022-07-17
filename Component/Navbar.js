import Head from 'next/head'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import jsCookie from 'js-cookie';
import { parseCookies } from 'nookies';
import Link from 'next/link';
export default function Navbar() {
  const router = useRouter();
  const { vet,user } = parseCookies();
  const [isdashboard, setIsdashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [product, setProduct] = useState(true);
  useEffect(() => {
    if (router.pathname === '/Login' || router.pathname === '/Signup/Customersignup' || router.pathname === '/Signup/Vetsignup' || router.pathname === '/Signup/adminsign') {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
    if(router.pathname === '/Dashboard'||router.pathname === '/Vetchat'||router.pathname === '/vetaccount'||router.pathname === '/vet-dashboard'||router.pathname === '/productup'||router.pathname === '/accountdashboard'){
      setIsdashboard(true)
    }
    else {
      setIsdashboard(false)
    }
    if(!user){
      if(router.pathname != '/Login' && router.pathname != '/Signup/Customersignup' && router.pathname != '/Signup/Vetsignup' && router.pathname != '/Signup/adminsign'){
      window.location.href='/Login';}
    }
    // if (router.pathname === '/product/id') {
    //   setProduct(true)
    // }
    // else {
    //   setProduct(false)
    // }
  }, [router.pathname])
  

  return (
    <>
      <Head>
        <title>Paw Life</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/images/logo.png" rel="shortcut icon" type="image/png" />
      </Head>
      {!isdashboard &&
        <div className="container-fluid bg-pink">
          <div className="container bg-pink">
            <nav className="navbar navbar-expand-lg navbar-light bg-pink">
              <div onClick={async()=>{window.location.href="/";}}  className="navbar-brand pal-1" >
                <img src="/images/logo.png"
                  width="80" height="80"
                  className="w-sm" alt="logo.png" />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {!isLoggedIn&& <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav pal-6">
              <li className="nav-item dropdown pl-3">
                      <a
                        className="nav-link dropdown-toggle fs-1"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {/* <a className="dropdown-item" href="login I.html">Customer &<br />Paitient Login</a> */}
                        <Link href='/Signup/Vetsignup'>Signup as Vet</Link><br/>
                        <Link href='/Signup/adminsign'>Signup as Admin</Link>
                        </div>
                    </li></ul></div>}
              {isLoggedIn ?
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav pal-6">
                    <li className="nav-item pl-3">
                    <div className="nav-link"><a href="#" onClick={async()=>{  window.location.href="/Store"}}>Store</a></div>
                    </li>
                    <li className="nav-item pl-3">
                      <div className="nav-link"><a href="#" onClick={async()=>{  window.location.href="/chat"}}>Consult</a></div>
                    </li>
                    <li className="nav-item pl-3">
                    <div className="nav-link"><a href="#" onClick={async()=>{  window.location.href="/Aboutus"}}>About Us</a></div>
                    </li>
                    <li className="nav-item pl-3">
                    <div className="nav-link"><a href="#" onClick={async()=>{  window.location.href="/cart"}}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></div>
                    </li>
                    <li className="nav-item dropdown pl-3">
                      <a
                        className="nav-link dropdown-toggle fs-1"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className='' href= '#' onClick={async()=>{  window.location.href="/userAccount"}}>User Account</a><br/>
                        {/* <a className="dropdown-item" href="login I.html">Customer &<br />Paitient Login</a> */}
                        <button className='btn btn-danger m-2' onClick={
                          () => {
                            jsCookie.remove('user'); if (vet) { jsCookie.remove('vet') }
                            router.push('/Login');
                          }
                        }>logout</button>
                        </div>
                    </li>
                  </ul>
                </div> : null}
            </nav>
          </div>
        </div>}

    </>
  )
}
