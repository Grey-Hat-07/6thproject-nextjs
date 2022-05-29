import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import jsCookie from 'js-cookie';
import { parseCookies } from 'nookies';
export default function Navbar() {
  const router = useRouter();
  const { vet } = parseCookies();
  const [isdashboard, setIsdashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [product, setProduct] = useState(true);
  useEffect(() => {
    if (router.pathname === '/Login' || router.pathname === '/Customersignup' || router.pathname === '/Vetsignup' || router.pathname === '/adminsign') {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
    if (router.pathname === '/Dashboard' || router.pathname === '/productup'|| router.pathname === '/accountdashboard') {
      setIsdashboard(true)
    }
    else {
      setIsdashboard(false)
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
      </Head>
      {!isdashboard &&
        <div className="container-fluid bg-pink">
          <div className="container bg-pink">
            <nav className="navbar navbar-expand-lg navbar-light bg-pink">
              <a href="/" className="navbar-brand pal-1" >
                <img src="/images/logo.png"
                  width="80" height="80"
                  className="w-sm" alt="logo.png" />
              </a>
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
              {isLoggedIn ?
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav pal-6">
                    <li className="nav-item pl-3">
                      <a className="nav-link" href="/Store">Store</a>
                    </li>
                    <li className="nav-item pl-3">
                      <a className="nav-link" href="/chat">Consult</a>
                    </li>
                    <li className="nav-item pl-3">
                      <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item pl-3">
                      <a href="/cart" className='nav-link'><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
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
                        {/* <a className="dropdown-item" href="login I.html">Customer &<br />Paitient Login</a> */}
                        <button className='btn btn-danger m-2' onClick={
                          () => {
                            jsCookie.remove('user'); if (vet) { jsCookie.remove('vet') }
                            router.push('/Login');
                          }
                        }>logout</button></div>
                    </li>
                  </ul>
                </div> : null}
            </nav>
          </div>
        </div>}

    </>
  )
}
