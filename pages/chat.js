import React from "react";
import { useState, useEffect } from "react";
import baseUrl from "../helpers/baseUrl";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import Head from "next/head";
export default function Chat() {
  const user = jsCookie.get("user");
  const chat = jsCookie.get("chat");
  // const {data} = props;
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState();
  const [chatData, setChatData] = useState();

  // if (!user) {
  //   window.location.href='/Login'

  // }

  useEffect(async () => {
    const res = await fetch(`${baseUrl}/api/Account`);
    const usedata = await res.json();
    setUserData(usedata);
  }, []);

  if (chat) {
    window.location.href = "/Chats";
  }
    const start = async () => {
      const res = await fetch(`${baseUrl}/api/Consult/createchat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.name,
        }),
      });
      const data = await res.json();
      jsCookie.set("chat", data._id);
      window.location.href = "/Chats";
    };
    return (
      <div>
        <script src="/js/jQuery.js" type="text/javascript" defer></script>
        {/* <script src="/js/cart.js" type="text/javascript"></script> */}
        <script src="/js/bootstrap.js" type="text/javascript" defer></script>
      <Head>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/chat.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/font-awesome.css" rel="stylesheet" type="text/css" />
        <link href="css/animate.css" rel="stylesheet" type="text/css" />
        </Head>
        <div className="container mt-chat-1">
          <div className="msg-header">
            <div className="msg-header-img">
              <img src="images/FallenCap.jpg" alt="header-img.jpeg" />
            </div>
            <div className="active">
              <h4 className="mt-chat-2">Not connected</h4>
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
                <div className="msg-page text-center">
                  {/* <div className="outgoing-chats">
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
                                </div> */}
                  {userData ? (
                    <button
                      className="btn-2 btn-pink py-3 mt-3 "
                      onClick={start}
                    >
                      Start Chat
                    </button>
                  ) : (
                    <button className="btn-2 btn-pink py-3 mt-3">
                      Loading..
                    </button>
                  )}
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="write message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="input-group-text">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
