import React from 'react'

export default function chat() {
    return (
        <div>
            <script src="/js/jQuery.js" type="text/javascript"></script>
            <script src="/js/cart.js" type="text/javascript"></script>
            <script src="/js/bootstrap.js" type="text/javascript"></script>

            <link href="css/style.css" rel="stylesheet" type="text/css" />
            <link href="css/chat.css" rel="stylesheet" type="text/css" />
            <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
            <link href="css/font-awesome.css" rel="stylesheet" type="text/css" />
            <link href="css/animate.css" rel="stylesheet" type="text/css" />

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
                            <input type="text" className="form-control" placeholder="write message..." />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
