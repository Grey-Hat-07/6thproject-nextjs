import React from 'react'
import jscookie from 'js-cookie';
import { parseCookies } from 'nookies';
import { useState, useEffect } from 'react';
export default function Vetchat() {
    const logout = () => {
        jsCookie.remove('user');
        jsCookie.remove('vet');
        router.push('/Login');
    }
    const [message, setMessage] = useState([]);
    return (
        <div>
            <link rel="stylesheet" href="/css/vet-dashboard.css" type="text/css" />
            <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
            <link href="css/chat.css" rel="stylesheet" type="text/css" />
            <link href="css/style.css" rel="stylesheet" type="text/css" />
            <link href="css/font-awesome.css" rel="stylesheet" type="text/css" />
            <link href="css/animate.css" rel="stylesheet" type="text/css" />
            
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
                <main>
                    <div className="container mt-chat-1">
                        <div className="msg-header">
                            <div className="msg-header-img">
                                <img src="images/FallenCap.jpg" alt="header-img.jpeg" />
                            </div>
                            <div className="active">
                                <h4>FallenCap</h4>
                                <h6>3 hours ago...</h6>
                            </div>
                            <div className="header-icons">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <i className="fa fa-video-camera" aria-hidden="true"></i>
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div className="chat-page">
                            <div className="msg-inbox">
                                <div className="chats">
                                    <div className="msg-page">
                                        <div className="outgoing-chats">
                                            <div className="outgoing-chats-msg">
                                                <p> Hi !! This message is from me</p>
                                                <span className="time">11.01 | January 1</span>
                                            </div>
                                            <div className="outgoing-chats-img">
                                                <img src="images/profile-1.jpg" alt="user-2.jpeg" />
                                            </div>
                                        </div>
                                        <div className="received-chats">
                                            <div className="received-chats-img">
                                                <img src="images/FallenCap.jpg" alt="user-2.jpeg" />
                                            </div>
                                            <div className="received-msg">
                                                <div className="received-msg-inbox">
                                                    <p> Hi !! This is a message from FallenCap</p>
                                                    <span className="time">11.01 | January 1</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="msg-bottom mt-3">
                                <div className="bottom-icons">
                                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    <i className="fa fa-camera" aria-hidden="true"></i>
                                    <i className="fa fa-microphone" aria-hidden="true"></i>
                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="write message..."
                                        value={message} onChange={(e) => setMessage(e.target.value)} />
                                    <div className="input-group-append">
                                        <button className="input-group-text"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}
