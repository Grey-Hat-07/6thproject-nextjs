import React from "react";
import jsCookie from "js-cookie";
import { parseCookies } from "nookies";
import baseUrl from "../helpers/baseUrl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Vetcard from "../Component/Vetcard";
import Head from "next/head";
import Link from "next/link";
export default function Vetdasboard() {
  const router = useRouter();
  const { vet } = parseCookies();
  const [userData, setUserData] = useState();
  useEffect(() => {
    if (!vet) {
      router.push("/");
    }
  }, []);
  const [livechat, setLivechat] = useState([]);
  const logout = () => {
    jsCookie.remove("user");
    jsCookie.remove("vet");
    router.push("/Login");
  };
  useEffect(async () => {
    const res = await fetch(`${baseUrl}/api/Consult/allchats`, {
      method: "GET",
    });
    const data = await res.json();
    if (data) {
      setLivechat(data);
    }
  });
  useEffect(async () => {
    const res = await fetch(`${baseUrl}/api/Account`);
    const usedata = await res.json();
    setUserData(usedata);
  }, []);

  return (
    <div><Head>
      <link rel="stylesheet" href="/css/vet-dashboard.css" type="text/css" />
      <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
      </Head>
      <script src="/js/jQuery.js" type="text/javascript" defer></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js"
        type="text/javascript" defer
      ></script>
      <script async src="js/vet.js" type="text/javascript" defer></script>
      
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <Link href="/vet-dashboard">
            <img
              src="images/logowhite.png"
              className="logo-vet logo-xl"
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
            <div id="clickings">
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
          <div className="card-account">
            <div className="card-header">
              <h3>New customer</h3>
              <button>
                See all <span className="las la-arrow-right"></span>
              </button>
            </div>

            {/* <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                    <img src="images/FallenCap.jpg" className="chat-profile-dp" alt="img.jpg" />
                                    <span className="status"></span>
                                    <div>
                                        <h4>FallenCap</h4>
                                    </div>
                                </div>
                                <div className="react">
                                    <span className="las la-sms"></span>
                                    <span className="las la-phone"></span>
                                </div>
                            </div>
                        </div> */}

            {livechat &&
              livechat.map((chat, index) => {
                if (chat.status === "active") {
                  return <Vetcard chat={chat} key={index} />;
                }
              })}
          </div>
        </main>
      </div>
    </div>
  );
}
