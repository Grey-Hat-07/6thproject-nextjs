import Head from 'next/head'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
export default function Navbar() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (router.pathname === '/Login'||router.pathname === '/Customersignup' ||router.pathname === '/Vetsignup') {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }, [router.pathname])
  return (
    <>
      <Head>
        <title>Paw Life</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {!isLoggedIn ?
        <link rel='stylesheet' href='css/style2.css' />:null
        }
      </Head>
      <div className="container-fluid bg-pink">
        <div className="container bg-pink">
          <nav className="navbar navbar-expand-lg navbar-light bg-pink">
            <Link href="/" classNameName="navbar-brand pal-1" >
              <img src="images/logo.png"
                width="80" height="80"
                className="w-sm" alt="logo.png" />
            </Link>
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
            { isLoggedIn?
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav pal-6">
                <li className="nav-item pl-3">
                  <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item pl-3">
                  <a className="nav-link" href="#">Consult</a>
                </li>
                <li className="nav-item pl-3">
                  <a className="nav-link" href="#">About Us</a>
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
                    <a className="dropdown-item" href="login I.html">Customer &<br />Paitient Login</a>
                    <a className="dropdown-item" href="login II.html">Vet Login</a></div>
                </li>
              </ul>
            </div>:null}
          </nav>
        </div>
      </div>

    </>
  )
}
