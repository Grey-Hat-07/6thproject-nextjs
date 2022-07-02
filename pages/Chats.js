import React from 'react'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import jsCookie from "js-cookie";
import { parseCookies } from "nookies";
import baseUrl from '../helpers/baseUrl';
export default function Chats() {
    const router = useRouter();
    const chat = jsCookie.get("chat");
    
    const [message, setMessage] = useState("");
    const [userData, setUserData] = useState();
    const [chatData, setChatData] = useState();
    useEffect(async () => {
        const res = await fetch(`${baseUrl}/api/Account`);
        const usedata = await res.json();
        setUserData(usedata);
      }, []);
    useEffect(async () => {
        if(!chat){
            window.location.href = "/chat";
        }
        const res = await fetch(`${baseUrl}/api/Consult/message`, {
            method: "GET",
        });
        const data = await res.json();
        setChatData(data);

        if (data && data[0].status === "end") {
            jsCookie.remove("chat");
            window.location.href = "/";
            alert("Chat ended");

            return;
        }
    });
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
        window.location.href = "/";
        alert("Chat ended");
    };
    const postmessage = async () => {
        const res = await fetch(`${baseUrl}/api/Consult/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
                sender: userData.name,
            }),
        });
        const data = await res.json();
        setMessage("");
    };
    return (
        <div>
        <script src="/js/jQuery.js" type="text/javascript" defer/>
        {/* <script src="/js/cart.js" type="text/javascript"></script> */}
        <script src="/js/bootstrap.js" type="text/javascript" defer/>

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
                        <h4 className="mt-chat-2">{chatData && chatData[0].vetname}</h4>
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
                                {chatData &&
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
                    <div className="msg-bottom mt-3">
                        <div className="bottom-icons">
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            <i className="fa fa-camera" aria-hidden="true"></i>
                            <i className="fa fa-microphone" aria-hidden="true"></i>
                            <i className="fa fa-smile-o" aria-hidden="true"></i>
                            <button className="btn-2 btn-white" onClick={end}>
                                End Chat
                            </button>
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
                                <span className="input-group-text" onClick={postmessage}>
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
