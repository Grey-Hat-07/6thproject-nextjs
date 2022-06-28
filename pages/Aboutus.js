import React from 'react'
import Head from 'next/head'
export default function Aboutus() {
  return (
    <div>
      <Head>
        <link href="css/style.css" type="text/css" rel="stylesheet" />
        <link href="css/about.css" type="text/css" rel="stylesheet" />
        <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
        <link href="css/animate.css" type="text/css" rel="stylesheet" />
        <link href="css/font-awesome.css" type="text/css" rel="stylesheet" />
      </Head>
      <script src="js/jQuery.js" type="text/javascript"></script>
      <script src="js/bootstrap.js" type="text/javascript"></script>
      <script src="js/owl.carousel.js" type="text/javascript"></script>

      <div class="bg-light">
    <div class="container py-5">
      <div class="row h-100 align-items-center py-5">
        <div class="col-lg-6">
          <h1 class="display-4">About&nbsp;<span class="text-about-1">PawLife</span></h1>
          <p class="lead text-muted mb-0">We made this project to show our love for dogs.</p>
        </div>
        <div class="col-lg-6 d-none d-lg-block"><img src="images/illus1.png" alt="" class="img-fluid"/></div>
      </div>
    </div>
  </div>

  <div class="bg-white py-5">
    <div class="container py-5">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-leaf fa-2x mb-3 text-about-2"></i>
          <h1 class="display-4">Minimal&nbsp;<span class="text-about-1">Design</span></h1>
          <p class="lead text-muted mb-4">The design of the website is minimal and fully respnsive which makes to easy
            to use for consumers.</p>
          <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
        </div>
        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/illus2.jpg" alt=""
            class="img-fluid mb-4 mb-lg-0"/></div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-5 px-5 mx-auto"><img src="images/illus3.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
        <div class="col-lg-6"><i class="fa fa-bar-chart fa-2x mb-3 text-about-2"></i>
          <h1 class="display-4">Pay secure with&nbsp;<span class="text-about-1">RazorPay</span></h1>
          <p class="lead text-muted mb-4">Buy anything for your dog with the security of RazorPay.</p>
          <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-light">
    <div class="container">
      <div class="row mb-4">
        <div class="col-lg-5">
          <h1 class="display-4 mt-4">Our&nbsp;<span class="text-about-1">Team</span></h1>
        </div>
      </div>

      <div class="row text-center">
        {/* <!-- Team item--> */}
        <div class="col-xl-6 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-5"><img src="images/IMG_20220421_003537_689.png" alt=""
              width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0">Subham Saha</h5>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100009239086320"
                  class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="https://twitter.com/subhams90316817" class="social-link"><i
                    class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/const_subham/" class="social-link"><i
                    class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/subham-saha-5a04b9155/"
                  class="social-link"><i class="fa fa-linkedin"></i></a></li>
              <li class="list-inline-item"><a href="https://github.com/FallenCap" class="social-link"><i
                    class="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
        {/* <!-- End-->

        <!-- Team item--> */}
        <div class="col-xl-6 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0">Subhamay Nath</h5>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>
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
