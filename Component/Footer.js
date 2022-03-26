import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row mt-5 ml-5 mr-5">
                    <div
                        className="col-xl-4 col-lg-12 col-md-12 Ms-1 mt-5 mb-5 mb-lg-8 text-lg-center"
                    >
                        <a href="#">
                            <img src="images/logo.png" width="200" alt="logo.png" />
                        </a>
                        <p className="text-4">
                            <i className="fa fa-envelope ml-4 mt-5 pl-2" aria-hidden="true"></i
                            ><span className="text-white pl-3">feedback@pawlife.org</span>
                        </p>
                        <p className="text-white text-9 mt-3 ml-4 pl-2">
                            Follow Us On<br />
                            <a href="#"
                            ><i className="fa fa-youtube-play" aria-hidden="true"></i
                            ></a>
                            <a href="#"
                            ><i className="fa fa-linkedin-square ml-4" aria-hidden="true"></i
                            ></a>
                            <a href="#"
                            ><i className="fa fa-facebook-official ml-4" aria-hidden="true"></i
                            ></a>
                            <a href="#"
                            ><i className="fa fa-twitter ml-4" aria-hidden="true"></i
                            ></a>
                        </p>
                    </div>
                    <div className="col-xl-1 col-lg-2 col-md-2 Ml-lg-2 mt-5 mt-lg-7 mb-5">
                        <a href="Product.html"
                        ><h4 className="text-white mt-6 text-center mb-lg-7">Product</h4></a
                        >
                    </div>
                    <div className="col-xl-1 col-lg-2 col-md-2 mt-5 mb-5 mt-lg-7">
                        <a href="Service.html"
                        ><h4 className="text-white mt-6 text-center mb-lg-7">Service</h4></a
                        >
                    </div>
                    <div className="col-xl-1 col-lg-2 col-md-2 mt-5 mb-5 mt-lg-7">
                        <a href="Jobs.html"
                        ><h4 className="text-white mt-6 text-center mb-lg-7">Carrers</h4></a
                        >
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 mt-5 mb-5 mt-lg-7">
                        <a href="learn&support.html"
                        ><h4 className="text-white mt-6 text-center mb-lg-7">
                                Learn & Support
                            </h4></a
                        >
                    </div>
                    <div className="col-xl-1 col-lg-2 col-md-2 mt-5 mb-5 mt-lg-7">
                        <a href="contact.html"
                        ><h4 className="text-white mt-6 text-center mb-lg-7">
                                Contact Us
                            </h4></a
                        >
                    </div>
                    <div className="col-xl-1 col-lg-2 col-md-2 mt-5 mb-5 mt-lg-7">
                        <a href="About.html"
                        ><h4 className="text-white mt-6 text-center mb-lg-7">About</h4></a
                        >
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-violet">
                <div className="row">
                    <div className="col-xl-12">
                        <p className="text-white text-center">
                            @Accenture , Some rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
