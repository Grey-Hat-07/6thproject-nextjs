import Head from 'next/head'
import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <Head>
                <title>Paw Life</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="container-fluid bg-pink">
                <div className="container bg-pink">
                    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
                        <a className="navbar-brand pal-1" href="index.html">
                            <img src="images/logo.png" width="80" height="80" alt="logo.png" />
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
                                <li className="nav-item pl-3">
                                    <a className="nav-link fs-1" href="#">
                                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
