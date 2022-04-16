import React from 'react'
import { useState, useEffect } from 'react'
import baseUrl from '../helpers/baseUrl';
import Head from 'next/head'
export default function Foodstore(props) {
  //const [products, setProducts] = useState([]);
  const listing = props.products.map((product, index) => {
    return (<div key= {product._id}>
      <div className="row mt-5">
          <div className="col-xl-12"></div>
      <div className="card" >
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body text-center">
          <h5 className="card-title text-s-4">{product.name}</h5>
          <p className="card-text">Price: $ {product.price}</p>
        </div>
      </div>
      </div>
    </div>
    )
  });



  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="css/style3.css" />
        <link rel="stylesheet" type="text/css" href="css/style4.css" />
      </Head>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <form className="form-inline my-2 my-lg-0 justify-content-center">
              <input className="form-control-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn-2 btn-outline-pink my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
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
        <div className="row mt-5">
          <div className="col-xl-12">
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
        {listing}
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
