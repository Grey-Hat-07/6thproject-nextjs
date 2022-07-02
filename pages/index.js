import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import Head from "next/head";

import Router from "next/router";
export default function Home() {
  const router = useRouter();
  const { user, AdminId, vet } = parseCookies();
   
  
  useEffect(() => {
    
    if (!user) {
      router.push("/Login");
    }
    if (AdminId) {
      window.location.href="/Dashboard";
    }
    if (vet) {
      router.push("/vet-dashboard");
    }
    if(router.isFallback)
    {
      router.reload();
    }

  }, []);

  return (
    <div>
      
        <script src="js/jQuery.js" type="text/javascript" defer/>
        <script src="js/script.js" type="text/javascript" defer/>
        <script src="js/bootstrap.js" type="text/javascript" defer/>
        <script src="js/owl.carousel.js" type="text/javascript" defer/>
        <script src="js/popper.min.js" type="text/javascript" defer/>
        <script src="js/popper.min.js" type="text/javascript" defer/>
        <script src="js/wow.js" defer/>
        {/* <script defer>new WOW().init();</script> */}
        <Head>
        {/* <link href="" */}
        <link href="/css/style.css" type="text/css" rel="stylesheet"   />
        <link href="/css/bootstrap.css" type="text/css" rel="stylesheet" />
        <link href="/css/animate.css" type="text/css" rel="stylesheet"  />
        <link href="/css/font-awesome.css" type="text/css" rel="stylesheet" />
        <link href="css/owl.carousel.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.theme.css" type="text/css" rel="stylesheet"  />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="images/banner 1.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-md-block d-xs-none">
                    <h1 className="text-1 wow fadeInLeftBig">
                      Join our revolution
                    </h1>
                    <p className="text-2 wow fadeInRightBig">
                      Donate for stray dogs
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-lights text-md-1"
                    >
                      Donate
                      <i
                        className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="images/banner 2.jpg"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-md-block d-xs-none">
                    <h1 className="text-1 wow fadeInLeftBig">
                      World class vets for your dog
                    </h1>
                    <p className="text-2 wow fadeInRightBig">
                      Consult with our vets for your dogs health and a beautiful
                      life
                    </p>
                    <div onClick={async()=>{ await router.push("/chat")}}>
                    <a
                      type="button"
                      className="btn btn-outline-lights text-md-1"
                    >
                      Talk Now
                      <i
                        className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
                    </a></div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="images/banner 3.jpg"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-xs-none d-xs-none">
                    <h1 className="text-1 wow fadeInLeftBig">Buy best</h1>
                    <p className="text-2 wow fadeInRightBig">
                      Buy medecines and other essentials for your dog
                    </p>
                    <div onClick={async()=>{ await router.push("/chat")}}>
                    <a
                      type="button"
                      className="btn btn-outline-lights text-md-1"
                      href='/Store'
                    >
                      Buy Now
                      <i
                        className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
                    </a></div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-5 overflow-h">
            <img src="images/pic 1.jpg" />
          </div>
          <div className="col-xl-7">
            <div className="body-text">
              <h1 className="text-3 wow fadeInLeft">Dog is our best friend</h1>
              <p className="mt-4 ml-4 wow fadeInRight">
                Dogs provide us with unconditional love and companionship.
                They&apos;re at our sides when we&apos;re sick, and they always seem to
                know when we need a little extra affection. They love us without
                judgment, even when we are ignoring them or not feeding them a
                second dinner. Dogs seem to understand us on another level that
                transcends language.
              </p>
              <button type="button" className="btn btn-outline-trans">
                Know More
              </button>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <i
                className="fa fa-user-md fa-4x mt-3 ml-5 color-1"
                aria-hidden="true"
              ></i>
              <div className="card-body">
                <h5 className="card-title text-3 ml-3">24*7</h5>
                <p className="card-text text-4 ml-3">
                  Vets are always available for everyone.
                </p>
              </div>
            </div>
            <div className="card">
              <i
                className="fa fa-paw fa-4x mt-3 ml-5 color-1"
                aria-hidden="true"
              ></i>
              <div className="card-body">
                <h5 className="card-title text-3 ml-3">Pet Care</h5>
                <p className="card-text text-4 ml-3">
                  We always care about your pets so we give you the best
                  products for your pets.
                </p>
              </div>
            </div>
            <div className="card">
              <i
                className="fa fa-rocket fa-4x mt-3 ml-5 color-1"
                aria-hidden="true"
              ></i>
              <div className="card-body">
                <h5 className="card-title text-3 ml-3">Super Fast</h5>
                <p className="card-text text-4 ml-3">
                  We provide super fast delivery for your pets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vlogs */}
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-12">
              <p className="text-center mb-5 text-7 wow fadeInLeft">Vlogs</p>
              <div className="span12">
                <div id="owl-demo">
                  <div className="item">
                    <div className="card ml-3">
                      <div className="overflow-h">
                        <a href="#" className="">
                          <img
                            className="card-img-top c-img-effect"
                            src="images/Celery.jpg"
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-5">
                          Dog Nutrition: Can you feed your dog celery?
                        </h5>
                        <p className="card-text text-lg-1 text-md-3">
                          Unlike cats, which are obligate carnivores, dogs are
                          omnivores which means they can eat a mix of meats
                          along with vegetables and fruits....
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="card ml-3">
                      <div className="overflow-h">
                        <a href="#" className="">
                          <img
                            className="card-img-top c-img-effect"
                            src="images/shutterstock_170532896-1024x683.jpg"
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-5">
                          Puppy nutrition - 101 - Overview
                        </h5>
                        <p className="card-text text-lg-1 text-md-3">
                          We love all things dog. In our endeavour to bring
                          education to pet parents we collaborated with David
                          Southey. David is an animal nutritionist...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="card ml-3">
                      <div className="overflow-h">
                        <a href="#" className="">
                          <img
                            className="card-img-top c-img-effect"
                            src="images/ezgif-4-fc82637d1b.jpg"
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-5">
                          Training your puppy to prevent biting
                        </h5>
                        <p className="card-text text-lg-1 text-md-3">
                          We love all things dog. In our endeavour to bring
                          education to pet parents we collaborated with Roohi
                          Kulkarni Kale to bring...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="card ml-3">
                      <div className="overflow-h">
                        <a href="#" className="">
                          <img
                            className="card-img-top c-img-effect"
                            src="images/CPP-100OFF-1024x1024.jpg"
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-5">
                          Be A Responsible Dog Parent
                        </h5>
                        <p className="card-text text-lg-1 text-md-3">
                          We love all things dog. In our endeavour to bring
                          awareness and education to pet parents, we
                          collaborated with Shharat Sharma, Ex- Civil Servant...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="card ml-3">
                      <div className="overflow-h">
                        <a href="#" className="">
                          <img
                            className="card-img-top c-img-effect"
                            src="images/mental-decline-senior-dogs-pet-med-zones-e1493751517883-1024x759.jpg"
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-5">
                          Save Your Dog From Joint Pain, Forever!
                        </h5>
                        <p className="card-text text-lg-1 text-md-3">
                          We love all things dog. In our endeavour to bring
                          education to pet parents, we collaborated with Canine
                          Behaviourist, Trainer and, Founder of PawsRUs....
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="card ml-3">
                      <div className="overflow-h">
                        <a href="#" className="">
                          <img
                            className="card-img-top c-img-effect"
                            src="images/Pic-4.jpg"
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-5">
                          Top 8 Questions on Dog Nutrition
                        </h5>
                        <p className="card-text text-lg-1 text-md-3">
                          We love all things dogs. In our endeavor to bring
                          education to pet parents, we collaborated with Dr.
                          Anish Pillai, Veterinary Manager at Farmina...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
