import React from 'react'
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import { parseCookies } from 'nookies'
export default function Footer() {
    const [isdashboard, setIsdashboard] = useState(false);
    const router = useRouter();
    const {role} = parseCookies();
    if(role){
      return (
        <></>);
    }
    useEffect(() => {
      if(router.pathname === '/Dashboard'||router.pathname === '/Vetchat'||router.pathname === '/vetaccount'||router.pathname === '/vet-dashboard'||router.pathname === '/productup'||router.pathname === '/accountdashboard'){
        setIsdashboard(true)
      }
      else{
        setIsdashboard(false)
      }
    }, [router.pathname])
    return (
      <footer>
        {!isdashboard&&
      <div className="container-fluid">
        <div className="row mt-5 ml-5 mr-5">
          <div
            className="col-xl-4 col-lg-12 col-md-12 col-sm-12 pr-xl-6 mt-5 mb-5 text-lg-center text-md-center text-sm-center text-xs-center"
          >
            <a href="#">
              <img
                src="/images/logo.png"
                width="150"
                className="w-md-1"
                alt="logo.png"
              />
            </a>
            <p className="text-6">
              <i
                className="fa fa-envelope ml-4 mt-5 pl-2 pl-md-0 pl-sm-0 pl-xs-0"
                aria-hidden="true"
              ></i
              ><span className="pl-3">feedback@pawlife.org</span>
            </p>
            <p className="text-6 mt-3 ml-4 ml-sm-0 pl-2 pl-md-0 pl-sm-0 pl-xs-0">
              Follow Us On<br />
              <a href="#"
                ><i className="text-icons fa fa-youtube-play" aria-hidden="true"></i
              ></a>
              <a href="#"
                ><i
                  className="text-icons fa fa-linkedin-square ml-4"
                  aria-hidden="true"
                ></i
              ></a>
              <a href="#"
                ><i
                  className="text-icons fa fa-facebook-official ml-4"
                  aria-hidden="true"
                ></i
              ></a>
              <a href="#"
                ><i className="text-icons fa fa-twitter ml-4" aria-hidden="true"></i
              ></a>
            </p>
          </div>
          <div
            className="col-xl-2 col-lg-3 col-md-3 mt-5 mb-5 mt-sm-4 mb-sm-4 mt-lg-7"
          >
            <a href="" className="text-8"
              ><h5 className="mt-6 mt-lg-6">Terms & Services</h5></a
            >
          </div>
          <div
            className="col-xl-2 col-lg-3 col-md-3 mt-5 mb-5 mt-sm-4 mb-sm-4 mt-lg-7"
          >
            <a href="Service.html" className="text-8"
              ><h5 className="mt-6 mt-lg-6">Shipping</h5></a
            >
          </div>
          <div
            className="col-xl-2 col-lg-3 col-md-3 mt-5 mb-5 mt-sm-4 mb-sm-4 mt-lg-7"
          >
            <a href="Jobs.html" className="text-8"
              ><h5 className="mt-6 mt-lg-6">Returns</h5></a
            >
          </div>
          <div
            className="col-xl-2 col-lg-3 col-md-3 mt-5 mb-5 mt-sm-4 mb-sm-4 mt-lg-7"
          >
            <a href="contact.html" className="text-8"
              ><h5 className="mt-6 mt-lg-6">Support</h5></a
            >
          </div>
        </div>
      </div>}
      {!isdashboard&&
      <div className="container-fluid bg-violet">
        <div className="row">
          <div className="col-xl-12">
            <p className="text-9">@PawLife , Some rights reserved</p>
          </div>
        </div>
      </div>}
    </footer>
    )
}
