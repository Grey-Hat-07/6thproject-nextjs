import React from 'react'
import Head from 'next/head'
import { Card } from '../Component/Card'
import baseUrl from '../helpers/baseUrl'
export default function Store(props) {
  const list = 6;
  var totalfood = 0,totalaccess=0;
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
export async function getStaticProps(context) {
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
