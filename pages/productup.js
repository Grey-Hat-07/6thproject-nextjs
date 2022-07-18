import React from 'react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import baseUrl from '../helpers/baseUrl';
import jsCookie from 'js-cookie'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { storage } from '../firebase/main.firebase'
import { Productcard } from '../Component/Productcard';
export default function Productup(props) {
  var { products } = props;
  const router = useRouter();
  const [productname, setProductname] = useState('');
  const [price, setprice] = useState();
  const [image, setimage] = useState(null);
  const [imageurl, setimageurl] = useState(null);
  const [category, setcategory] = useState('');
  const [description, setdescription] = useState('');
  const [quantity, setquantity] = useState('');

  const [userData,setUserData]= useState();
  //const [items, setItems] = useState([]);
  // useEffect(async () => {
  //   const res = await fetch(`${baseUrl}/api/Product`);
  //   const data = await res.json();
  //   setItems(data);
  // }) 
  useEffect(async()=>{
    if(router.isFallback)
    {
      window.location.href="/Dashboard";
    }
  },[])
  useEffect(async()=>{
    const res = await fetch(`${baseUrl}/api/Account`);
    const data = await res.json()
    setUserData(data);
},[])

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!image || !productname || !price || !category || !description || !quantity) {
      return alert("Please fill all the fields");
    }
    console.log(image)
    console.log(productname, price, category);
    const res = await fetch(`${baseUrl}/api/Product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: productname,
        price,
        category,
        image,
        description,
        quantity
      })
    })
    const res2 = await res.json();
    if (res2.error) {
      //console.log(res2.error);
      alert(res2.error);
    }
    else {
      alert("Product added successfully");
      setProductname('');
      setprice('');
      setimage(null);
      setimageurl(null);
      setcategory('');
      window.location.reload();
    }
  }
  const imageUpload = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `project/${imageurl.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageurl);
    uploadTask.on(
      "state_changed",
      snapshot => { },
      err => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
            console.log(url);
            setimage(url);
            alert("Image verified successfully");
          })
      }
    )

    //console.log(file.url);
  }
  const logout = () => {
    jsCookie.remove('user');
    jsCookie.remove('AdminId');
    router.push('/Login');
  }


  return (
    <div>
      {/* <script src="/js/admin.js" type="text/javascript" defer></script> */}
      <Head>
        <link rel="stylesheet" href="/css/productup.css" type="text/css" />
        <link rel="stylesheet" href="/css/line-awesome.css" type="text/css" />
        <link rel="stylesheet" href="/css/dashboard-cus.css" type="text/css" />
        
      </Head>
      <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <Link href="/Dashboard">
                        <img src="images/logowhite.png" className="logo logo-xl" alt="logo.png" />
                    </Link>
                </div>

                <div className="sidebar-menu">
                <ul>
                        <li>
                            <div onClick={async()=>{    window.location.href="/Dashboard"}} className="pt-1">
                                <a href='#'>
                                <span className="las la-igloo"></span>
                                <span className="disp-md-none">Dashboard</span></a>
                            </div>
                        </li>
                        <li>
                            <div onClick={async()=>{window.location.href="/productup"}} >
                                <a href='#'>
                                <span className="las la-clipboard-list"></span>
                                <span className="disp-md-none">Items</span></a>
                            </div>
                        </li>
                        <li>
                            <div onClick={async()=>{window.location.href="/accountdashboard"}}>
                                <a href='#'>
                                <span className="las la-user-circle"></span>
                                <span className="disp-md-none">Accounts</span></a>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="" onClick={logout}>
                                <span className="las la-sign-out-alt"></span>
                                <span className="disp-md-none">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <header>
                    <h2>
                        <div id="clicking">
                            <label htmlFor="nav-toggle">
                                <span className="las la-bars"></span>
                            </label>
                        </div>
                    </h2>
                    <div className="search-wrapper">
                        <span className="las la-search"></span>
                        <input type="search" placeholder="Search here" />
                    </div>

                    <div className="user-wrapper">
                        <img
                            src="images/FallenCap.jpg"
                            width="40px"
                            height="40px"
                            alt="img.jpg"
                        />
                        <div>
                            <h4>{userData&&userData.name}</h4>
                            <small>Seller</small>
                        </div>
                    </div>
                </header>
        <main>
          <div className="card">
            <div className="card-header">
              <h3>Add New Product</h3>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Select Item</label>
                  <select className="form-control-2" id="exampleFormControlSelect1" value={category}
                    onChange={(e) => setcategory(e.target.value)}>
                    <option value={null}>Select Category</option>
                    <option value="Foods">Foods</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Medicine">Medicine</option>
                  </select></div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product</label>
                  <input
                    type="Name"
                    className="form-control-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter product name"
                    value={productname} onChange={(e) => setProductname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Price</label>
                  <input
                    type="number"
                    className="form-control-2"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter price"
                    value={price} onChange={(e) => setprice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Quantity</label>
                  <input
                    type="number"
                    className="form-control-2"
                    id="exampleInputPassword1"
                    placeholder="Enter quantity"
                    value={quantity} onChange={(e) => setquantity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1 btn-2">Upload image</label>
                  <input
                    type="file"
                    className="form-control-file-2"
                    id="exampleFormControlFile1"
                    accept='image/*' onChange={(e) => { setimageurl(e.target.files[0]); }}
                  />
                </div>
                {imageurl && <>
                  <img src={
                    imageurl ? URL.createObjectURL(imageurl) : ''
                  } className="rounded float-end" alt='Image preview' style={{ width: '100px', height: '100px' }} />
                  {!image ? <button className='btn' onClick={imageUpload}>Verify image</button> : <button className='btn' disabled>Verify image</button>}
                </>}
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <textarea
                    className="form-control-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={description} onChange={(e) => setdescription(e.target.value)}
                  >

                  </textarea>
                </div>
                {image ? <button className='btn-2 btn-purple-2' type="submit">Upload Item</button>
                  : <button className='btn-2 btn-purple-2 disabled' disabled>Upload Item</button>}
              </form>
            </div>
          </div>

          <div className="pt-1">
            <div className="card">
              <div className="card-header">
                <h3>Edit items</h3>
                <button>
                  <a href="#" className="text-1">
                    Show more <span className="las la-arrow-right"></span>
                  </a>
                </button>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Item</td>
                        <td>Quantity</td>
                        <td>Update here</td>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => {
                        return (
                          <Productcard key={product._id} product={product} />
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
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


