import React from "react";
import jsCookie from "js-cookie";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import baseUrl from "../helpers/baseUrl";
import Link from "next/link";
export default function Vetchat() {
  const router = useRouter();
  const logout = () => {
    jsCookie.remove("user");
    jsCookie.remove("vet");
    router.push("/Login");
  };
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState();
  const [chatData, setChatData] = useState();
  useEffect(async () => {
    const res = await fetch(`${baseUrl}/api/Account`);
    const usedata = await res.json();
    setUserData(usedata);
    console.log(usedata);
  }, []);
  useEffect(async () => {
    const res = await fetch(`${baseUrl}/api/Consult/message`, {
      method: "GET",
    });
    const data = await res.json();
    setChatData(data);

    if (data && data[0].status === "end") {
      jsCookie.remove("chat");
      window.location.href = "/vet-dashboard";
      alert("Chat ended");

      return;
    }
  });
  const postmessage = async () => {
    const res = await fetch(`${baseUrl}/api/Consult/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        sender: userData.name,
        timestamp: Date.now(),
      }),
    });
    const data = await res.json();
    setMessage("");
  };
  const end = async () => {
    const res = await fetch(`${baseUrl}/api/Consult/chatstatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "end",
      }),
    });
    const data = await res.json();
    jsCookie.remove("chat");
    window.location.href = "/vet-dashboard";
    alert("Chat ended");
  };
  return (
    <div>
      <link rel="stylesheet" href="/css/vet-dashboard.css" type="text/css" />
      <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
      <link href="css/chat.css" rel="stylesheet" type="text/css" />
      <link href="css/style.css" rel="stylesheet" type="text/css" />
      <link href="css/font-awesome.css" rel="stylesheet" type="text/css" />
      <link href="css/animate.css" rel="stylesheet" type="text/css" />

      <script src="/js/jQuery.js" type="text/javascript" defer></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js"
        type="text/javascript" defer
      ></script>
      <script src="/js/vet.js" type="text/javascript" defer></script>
      
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
      <div className="sidebar-brand">
          <Link href="/vet-dashboard">
            <img
              src="images/logowhite.png"
              className="logo-vet-1 logo-xl"
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
              <a href="#" onClick={logout}>
                <span className="las la-sign-out-alt"></span>{" "}
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
            <img
              src="images/FallenCap.jpg"
              width="40px"
              height="40px"
              alt="img.jpg"
            />
            <div>
              <h4>{userData && userData.name}</h4>
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
                <h4 className="mt-chat-2">
                  {chatData && chatData[0].username}
                </h4>
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
                    {chatData &&userData&&
                      chatData[0].messages.map((item, index) => {
                        if (item.sender === userData.name) {
                          return (
                            <div className="outgoing-chats" key={index}>
                              <div className="outgoing-chats-msg">
                                <p>{item.message}</p>
                                <span className="time">{item.timestamp}</span>
                              </div>
                              <div className="outgoing-chats-img">
                                <img
                                  src="images/profile-1.jpg"
                                  alt="user-2.jpeg"
                                />
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div className="received-chats" key={index}>
                              <div className="received-chats-img">
                                <img
                                  src="images/FallenCap.jpg"
                                  alt="user-2.jpeg"
                                />
                              </div>
                              <div className="received-msg">
                                <div className="received-msg-inbox">
                                  <p>{item.message}</p>
                                  <span className="time">{item.timestamp}</span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className="msg-bottom mt-chat-3">
                <div className="bottom-icons">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <i className="fa fa-camera" aria-hidden="true"></i>
                  <i className="fa fa-microphone" aria-hidden="true"></i>
                  <i className="fa fa-smile-o" aria-hidden="true"></i>
                  <button className="btn-2 btn-white" onClick={end}>
                    End Chat
                  </button>
                </div>
                <div className="input-group-2">
                  <input
                    type="text"
                    className="form-control-2"
                    placeholder="write message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="input-group-append-2">
                    <span
                      className="input-group-text-2 pt-chat-1"
                      onClick={postmessage}
                    >
                      <i
                        className="fa fa-paper-plane pink"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
