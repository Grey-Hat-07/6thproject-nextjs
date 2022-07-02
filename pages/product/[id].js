import baseUrl from "../../helpers/baseUrl";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import jsCookie from "js-cookie";
import Head from "next/head";
import Similarcard from "../../Component/Similarcard";
const Product = (props) => {
  
  const { product } = props;
  const { recommended } = props;
  let list = 0, total = 4;
  var products = [];
  const quantity = product.quantity;
  const router = useRouter();
  // if (router.asPath) {
  //   //window.location.reload();
  //   return <h1 className="text-primary">Loading...</h1>
  // }
  const [userData, setUserData] = useState({});
  useEffect(async () => {
    const res = await fetch(`${baseUrl}/api/Account`);
    const data = await res.json();
    setUserData(data);
  },[])
  const addToCart = async () => {

    const data = {
      productId: product._id,
      quantity: 1,
      price: product.price,
      productname: product.name
    }
    const res = await fetch(`${baseUrl}/api/Cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({product:data})
    })
    const json = await res.json()
    router.push("/cart")


  }
  const createOrder = async ({ paymentId, razorpayOrderId }) => {
    const res = await fetch(`${baseUrl}/api/Order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        products: products,
        email: userData.email,
        total: product.price,
        paymentId,
        razorpayOrderId
      })
    });
    jsCookie.remove('productid');
    const res2 = await res.json();
    if (res2) {
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
    products.push({
      product: product._id,
      productname: product.name, price: product.price, quantity: 1
    })
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
      name: "Paw Life",
      currency: data.currency,
      amount: product.price,
      order_id: data.id,
      description: "Join our revolution",
      image: "/images/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        createOrder({ paymentId: response.razorpay_payment_id, razorpayOrderId: response.razorpay_order_id });
       
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
      <script src="/js/jQuery.js" type="text/javascript" defer/>
      <script src="/js/product.js" type="text/javascript" defer/>
      <script src="/js/bootstrap.js" type="text/javascript" defer/>
      <script src="/js/owl.carousel.js" type="text/javascript" defer/>
      <script src="/js/wow.js" type="text/javascript" defer/>
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
              {quantity==0&&<>
              <p className="text-danger"> Currently the product is unavailable</p>
              <div className="btn-grp pt-3">
                <button type="button" className="btn-2 btn-pink"
                  disabled> 
                  Add To Cart
                </button>
                <span className="pl-4">
                  <button type="button" className="btn-2 btn-dark" disabled >
                    Buy Now
                  </button>
                </span>
              </div></>

              }{quantity!=0&&
              <div className="btn-grp pt-3">
                <button type="button" className="btn-2 btn-pink"
                  onClick={addToCart}> 
                  Add To Cart
                </button>
                <span className="pl-4">
                  <button type="button" className="btn-2 btn-dark" onClick={makePayment} >
                    Buy Now
                  </button>
                </span>
              </div>}
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
                  {recommended.map((recomproduct) => {
                    if (recomproduct.category === product.category && list <= total && recomproduct._id !== product._id&& recomproduct.quantity!==0) {
                      list++;
                      return (
                        <Similarcard key={recomproduct._id} recomproduct={recomproduct} />
                      )
                    }
                  }
                  )}
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
  const res = await fetch(`${baseUrl}/api/product/${id}`, {
    method: "GET"
  })
  const res2 = await fetch(`${baseUrl}/api/Product`, {
    method: 'GET'
  })
  const data = await res.json()
  const data2 = await res2.json()
  return {
    props: {
      product: data,
      recommended: data2
    }
  }

}

export default Product;