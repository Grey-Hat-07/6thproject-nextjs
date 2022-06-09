import React from 'react'

export default function vetaccount() {
    const logout = () => {
        jsCookie.remove('user');
        jsCookie.remove('vet');
        router.push('/Login');
    }
  return (
    <div>
            <link rel="stylesheet" href="/css/vet-dashboard.css" type="text/css" />
            <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
            <script src="/js/jQuery.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js" type="text/javascript"></script>
            <script src="/js/admin.js" type="text/javascript"></script>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <a href="index.html">
                        <img src="images/logowhite.png" className="logo logo-xl" alt="logo.png" />
                    </a>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="/vet-dashboard" className="pt-1"><i className="las la-comments"></i> <span
                                className="disp-md-none">Consult</span></a>
                        </li>
                        <li>
                            <a href="/vetaccount"><span className="las la-user-circle"></span> <span
                                className="disp-md-none">Accounts</span></a>
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
                            <h4>Subham Saha</h4>
                            <small>Vet</small>
                        </div>
                    </div>
                </header>

            
                      
            </div>
        </div>
  )
}
