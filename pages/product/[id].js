import baseUrl from "../../helpers/baseUrl";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import jsCookie from "js-cookie";
import Head from "next/head";
const product = (props) => {
  const { product } = props;
  var products = [];
    const router = useRouter();
    if (router.isFallback) {
        return <h1 className="text-primary">Loading...</h1>
    }
    const [userData, setUserData] = useState({});
    useEffect(async() => {
     const res = await fetch(`${baseUrl}/api/Account`);
      const data = await res.json();
      setUserData(data);



    })
    const addToCart = async () => {
    
        const data = {
            productId: product._id,
            quantity: 1,
            price: product.price,
            productname: product.name
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
    const createOrder = async({paymentId, razorpayOrderId}) => {
      const res = await fetch(`${baseUrl}/api/Order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          products : products,
          email : userData.email,
          total : product.price,
          paymentId ,
          razorpayOrderId
        })
      });
      jsCookie.remove('productid');
      const res2 = await res.json();
      if(res2) {
        router.push('/');
      }
    }
    // razorpay section
    const initializeRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
  
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
  
        document.body.appendChild(script);
      });
    };
    const makePayment = async () => {
      const res = await initializeRazorpay();
      products.push({product: product._id,
        productname: product.name, price: product.price, quantity: 1})
      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }
      jsCookie.set("productid", product._id);
  
      // Make API call to the serverless API
      const data = await fetch(`${baseUrl}/api/Razorpay`, { 
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json"
          // },
          // body: JSON.stringify({
          //   price: product.price
          // })
      }).then((t) =>
        t.json()
      );
      console.log(data);
      var options = {
        key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        name: "Mystore",
        currency: data.currency,
        amount: product.price,
        order_id: data.id,
        description: "Thankyou for your test donation",
        image: "/images/logo.png",
        handler: function (response) {
          // Validate payment at server - using webhooks is a better idea.
          createOrder({ paymentId: response.razorpay_payment_id, razorpayOrderId: response.razorpay_order_id });
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: userData.name,
          email: userData.email
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  
  return (

    <>
      <script src="/js/jQuery.js" type="text/javascript"></script>
      <script src="/js/product.js" type="text/javascript"></script>
      <script src="/js/bootstrap.js" type="text/javascript"></script>
      <script src="/js/owl.carousel.js" type="text/javascript"></script>
      <script src="/js/wow.js"></script>
     
        <link rel="stylesheet" href="/css/style.css" type="text/css" />
        <link rel="stylesheet" href="/css/product.css" type="text/css" />
        <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="/css/animate.css" type="text/css" />
        <link rel="stylesheet" href="/css/font-awesome.css" type="text/css" />
        <link href="/css/owl.carousel.css" type="text/css" rel="stylesheet" />
        <link href="/css/owl.theme.css" type="text/css" rel="stylesheet" />

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
                <button type="button" className="btn-2 btn-pink">
                  {/* onClick={addToCart}> */}
                  Add To Cart
                </button>
                <span className="pl-4">
                  <button type="button" className="btn-2 btn-dark" onClick={makePayment} >
                    Buy Now
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