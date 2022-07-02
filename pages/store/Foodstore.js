import React from 'react'
import { useState, useRef } from 'react'
import baseUrl from '../../helpers/baseUrl';
import { Card } from '../../Component/Card';
import Head from 'next/head'
export default function Foodstore(props) {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const inputEl = useRef('');
  const searchHandler = (searchterm) => {
    setSearch(searchterm);
    if (searchterm !== "") {
      const newlist = props.products.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchterm.toLowerCase());
      });
      setSearchResult(newlist);
    }
    else {
      setSearchResult(props.products);
    }
  }
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  }




  return (
    <div>
      <Head>
        <link href="/css/style3.css" type="text/css" rel="stylesheet" />
        <link href="/css/style.css" type="text/css" rel="stylesheet" />
        <link href="/css/style4.css" type="text/css" rel="stylesheet" />
        <link href="/css/bootstrap.css" type="text/css" rel="stylesheet" />
        <link href="/css/animate.css" type="text/css" rel="stylesheet" />
        <link href="/css/font-awesome.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.carousel.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.theme.css" type="text/css" rel="stylesheet" />
      </Head>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-12">
            <form className="form-inline my-2 my-lg-0 justify-content-center">
              <input className="form-control-2 mr-sm-2" type="search" value={search} onChange={getSearchTerm} ref={inputEl}
                placeholder="Search" aria-label="Search" />
              <button className="btn-2 btn-outline-pink my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
        <div className='row'>
          {search.length < 1 ?
            props.products.map((product, index) => {
              if (product.category === "Foods") {
                return < Card product={product} key={product._id} />
              }
            }) :
            searchResult.length > 0 ?
              searchResult.map((product, index) => {
                if (product.category === "Foods") {
                  return < Card product={product} key={product._id} />
                }
              }) :
              <h1>No Result Found</h1>
          }</div>
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
