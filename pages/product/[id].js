import baseUrl from "../../helpers/baseUrl";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
const product = (props) => {
  const { product } = props;
  
    const router = useRouter();
    if (router.isFallback) {
        return <h1 className="text-primary">Loading...</h1>
    }
    const addToCart = async () => {
    
        const data = {
            productId: product._id,
            quantity: 1,
            price: product.price
        }
        const res = await fetch(`${baseUrl}/api/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()
        router.push("/cart")


    }
  
  return (

    <>
      <script src="/js/jQuery.js" type="text/javascript"></script>
      <script src="/js/product.js" type="text/javascript"></script>
      <script src="/js/bootstrap.js" type="text/javascript"></script>
      <script src="/js/owl.carousel.js" type="text/javascript"></script>
      <script src="/js/wow.js"></script>
      <Head>
        <link rel="stylesheet" href="/css/style.css" type="text/css" />
        <link rel="stylesheet" href="/css/product.css" type="text/css" />
        <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="/css/animate.css" type="text/css" />
        <link rel="stylesheet" href="/css/font-awesome.css" type="text/css" />
        <link href="/css/owl.carousel.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.theme.css" type="text/css" rel="stylesheet" />

      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5">
            <img src={product.image} className="product-img" alt={product.name} />
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="pt-product-1 pl-5 pl-sm-1">
              <span className="badge badge-pill badge-pink">For puppies</span>
              <h1 className="text-left text-product-1">{product.name}</h1>
              <p className="text-product-2">Price:<span className="text-product-3 pl-2">${product.price}</span></p>
              <p className="text-product-4 pt-5 pt-lg-4 pt-md-3 pt-sm-2">
                {product.description}
              </p>

              <div className="btn-grp pt-3">
                <button type="button" className="btn-2 btn-pink" onClick={addToCart}>
                  Add To Cart
                </button>
                <span className="pl-4">
                  <button type="button" className="btn-2 btn-dark" >
                    <a href="#">Buy Now</a>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-12">
              <p className="mb-5 text-7 wow fadeInLeft">Similar Products</p>
              <div className="span12">
                <div id="owl-demo">
                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_1563693.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>

                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_1564000.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>

                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_1564128.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>

                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_2331886.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>

                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_2469302.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>

                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_2994192.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>
                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_3327040.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>
                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_3327325.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>
                  <div className="w-md">
                    <div className="item">
                      <a href="#">
                        <img src="/images/PngItem_3327391.png" className="product-img-2" alt="item1.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${baseUrl}/api/product/${id}`,{
        method: "GET"
    })
    const data = await res.json()
    return {
        props: {
            product: data
        }
    }

}
export default product;