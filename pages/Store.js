import React from 'react'
import Head from 'next/head'
import { Card } from '../Component/Card'
import baseUrl from '../helpers/baseUrl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Store(props) {
  
  const list = 3;
  var totalfood = 0, totalaccess = 0, totalmed = 0;
  return (
    <div>
      <Head>
        <script src="/js/jQuery.js" type="text/javascript" defer></script>
        <script src="/js/script.js" type="text/javascript" defer></script>
        <script src="/js/bootstrap.js" type="text/javascript" defer></script>
        <script src="/js/owl.carousel.js" type="text/javascript" defer></script>
        <script src="/js/popper.min.js" type="text/javascript" defer></script>
        <script src="/js/popper.min.js" type="text/javascript" defer></script>
        <script src="/js/wow.js" defer></script>

        <link href="/css/style3.css" type="text/css" rel="stylesheet" />
        <link href="/css/style.css" type="text/css" rel="stylesheet" />
        <link href="/css/bootstrap.css" type="text/css" rel="stylesheet" />
        <link href="/css/animate.css" type="text/css" rel="stylesheet" />
        <link href="/css/font-awesome.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.carousel.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.theme.css" type="text/css" rel="stylesheet" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <img src="images/SWOT-analysis-of-Pedigree.jpg" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <p className="text-s-1 wow fadeInLeftBig">Feed your dog</p>
              <h1 className="text-s-2 wow fadeInRightBig">A bowl of goodness</h1>
              <button type="button" className="btn btn-outline-light"><Link href="/store/Foodstore" className="button-text-1">Explore Range</Link></button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <h1 className="text-s-3 wow fadeInLeft">Foods</h1>

          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {props.products.map((product, index) => {
            if (product.category === "Foods" && totalfood < list) {
              totalfood++;
              return < Card product={product} key={product._id} />
            }
          })}
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <div className="text-center">
              <button type="button" className="btn btn-outline-dark btn-lg">
                <Link href="/store/Foodstore" className="button-text-2">Explore More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <h1 className="text-s-3 wow fadeInRight">Dog Accessories & Products</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {props.products.map((product, index) => {
            if (product.category === "Accessories" && totalaccess < list) {
              totalaccess++;
              return < Card product={product} key={product._id} />
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <div className="text-center">
              <button type="button" className="btn btn-outline-dark btn-lg">
                <Link href="/store/Accessories" className="button-text-2">
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <h1 className="text-s-3 wow fadeInRight">Medicines</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {props.products.map((product, index) => {
            if (product.category === "Medicine" && totalmed < list) {
              totalmed++;
              return < Card product={product} key={product._id} />
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <div className="text-center">
              <button type="button" className="btn btn-outline-dark btn-lg">
                <Link href="/store/medicines" className="button-text-2">
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(`${baseUrl}/api/Product`, {
    method: 'GET'
  })
  const data = await res.json()
  return {
    props: {
      products: data
    }
  }
}
