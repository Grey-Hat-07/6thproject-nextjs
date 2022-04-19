import React from 'react'
import Head from 'next/head'
export default function Store() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="css/style3.css" />
        <link rel="stylesheet" type="text/css" href="css/style4.css" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <img src="images/SWOT-analysis-of-Pedigree.jpg" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <p className="text-s-1 wow fadeInLeftBig">Feed your dog</p>
              <h1 className="text-s-2 wow fadeInRightBig">A bowl of goodness</h1>
              <button type="button" className="btn btn-outline-light"><a href="/Foodstore" className="button-text-1">Explore Range</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <h1 className="text-s-3 wow fadeInLeft">Foods</h1>
            <div className="card-deck mt-5">
              <div className="card">
                <img className="card-img-top" src="images/PngItem_1397101.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Bella Grilled Chicken</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/PngItem_1563693.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">K95 Beef and Duck meat</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/PngItem_2331886.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Pedigree ground beef</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="images/PngItem_826017.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Castor&Pollux Organic Chicken</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/PngItem_2469302.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Boreal Chicken formula</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/PngItem_3327325.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">FirstMate Turkey formula</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-dark btn-lg">
                <a href="/Foodstore" className="button-text-2">Explore More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <h1 className="text-s-3 wow fadeInRight">Dog Accessories & Products</h1>
            <div className="card-deck mt-5">
              <div className="card">
                <img className="card-img-top" src="images/favpng_dog-harness-braces-clothing-accessories.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Dog Harness</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/home-hero-collar.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Fi Smart Dog Collar</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/5b8d339ba639e004e1cab52b.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Kong Toy Bone</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="images/kindpng_1809019.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Dog Harness</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/5b8d3373a639e004e1cab527.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Fi Smart Dog Collar</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/61NfN0SNV2L._SX425_.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title text-s-4">Kong Toy Bone</h5>
                  <p className="card-text">Price: $ 10</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-dark btn-lg">
                <a href="/Accessories" className="button-text-2">
                  Explore More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
