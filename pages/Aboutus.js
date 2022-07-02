import React from 'react'
import Head from 'next/head'
export default function Aboutus() {
  return (
    <div>
      <script src="js/jQuery.js" type="text/javascript" defer></script>
      <script src="js/bootstrap.js" type="text/javascript" defer></script>
      <script src="js/owl.carousel.js" type="text/javascript" defer></script>

      <Head>
        <link href="css/style.css" type="text/css" rel="stylesheet" />
        <link href="css/about.css" type="text/css" rel="stylesheet" />
        <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
        <link href="css/animate.css" type="text/css" rel="stylesheet" />
        <link href="css/font-awesome.css" type="text/css" rel="stylesheet" />
      </Head>


      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About&nbsp;<span className="text-about-1">PawLife</span></h1>
              <p className="lead text-muted mb-0">We made this project to show our love for dogs.</p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img src="images/illus1.png" alt="" className="img-fluid" /></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-leaf fa-2x mb-3 text-about-2"></i>
              <h1 className="display-4">Minimal&nbsp;<span className="text-about-1">Design</span></h1>
              <p className="lead text-muted mb-4">The design of the website is minimal and fully respnsive which makes to easy
                to use for consumers.</p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/illus2.jpg" alt=""
              className="img-fluid mb-4 mb-lg-0" /></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"><img src="images/illus3.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            <div className="col-lg-6"><i className="fa fa-bar-chart fa-2x mb-3 text-about-2"></i>
              <h1 className="display-4">Pay secure with&nbsp;<span className="text-about-1">RazorPay</span></h1>
              <p className="lead text-muted mb-2">Buy anything for your dog with the security of RazorPay.</p>
              <p className="lead text-muted mb-4">use this <a className='text-primary' href='https://razorpay.com/docs/payments/payments/test-card-upi-details/'>test cards and upi</a> for transaction.</p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h1 className="display-4 mt-4">Our&nbsp;<span className="text-about-1">Team</span></h1>
            </div>
          </div>

          <div className="row text-center">
            {/* <!-- Team item--> */}
            <div className="col-xl-6 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-5"><img src="images/IMG_20220421_003537_689.png" alt=""
                width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Subham Saha</h5>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100009239086320"
                    className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://twitter.com/subhams90316817" className="social-link"><i
                    className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com/const_subham/" className="social-link"><i
                    className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/subham-saha-5a04b9155/"
                    className="social-link"><i className="fa fa-linkedin"></i></a></li>
                  <li className="list-inline-item"><a href="https://github.com/FallenCap" className="social-link"><i
                    className="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End-->

        <!-- Team item--> */}
            <div className="col-xl-6 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img
                src="images/profilepic2.jpg" alt="" width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Subhamay Nath</h5>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/subhamay-nath-a70a53221/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://github.com/Grey-Hat-07" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/subhamay-nath-a70a53221/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/subhamay-nath-a70a53221/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                  <li className="list-inline-item"><a href="https://github.com/Grey-Hat-07" className="social-link"><i className="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}
          </div>
        </div>
      </div>
    </div>
  )
}
