import React from 'react'
import { useState } from 'react'
import baseUrl from '../../helpers/baseUrl';
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [AdminId, setadminid] = useState('');
  const [policy, setPolicy] = useState(false);
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  const router = useRouter()
  const handlesubmit = async (e) => {
    e.preventDefault()
    if (policy == false) {
      return alert('Please accept the terms and conditions')
    }
    if (!regex.test(email)) {
      alert("Invalid email")
      return;
    }
    const res = await fetch(`${baseUrl}/api/Adminsign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, AdminId })
    })
    const res2 = await res.json();
    if (res2.error) {
      alert(res2.error)
    }
    else {
      console.log(res2)
      router.push('/Login')
    }
  }
  return (
    <div className="container-fluid">
      <script src="/js/jQuery.js" type="text/javascript" async></script>
        <script src="/js/custom.js" type="text/javascript" async></script>
        <script src="/js/popper.min.js" type="text/javascript" async></script>
        <script src="/js/bootstrap.js" type="text/javascript" async></script>
        <script  src="/js/wow.js" type="text/javascript" async></script>
      <Head>
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/style2.css" rel="stylesheet" type="text/css" />
        <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="/css/animate.css" rel="stylesheet" type="text/css" />
        <link href="/css/font-awesome.css" rel="stylesheet" type="text/css" />
        <link href="/css/owl.carousel.css" rel="stylesheet" type="text/css" />
        <link href="/css/owl.theme.css" rel="stylesheet" type="text/css" />

      </Head>
      <div className="container">
        <div className="row mbc-1 mtc-1">
          <div className="col-xl-12">
            <h1 className="texts-1 wow fadeInLeft">Admin Signup</h1>
          </div>
          <div className="col-xl-12 m-form-1">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="Name"
                  className="form-control-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">AdminId</label>
                <input
                  type="text"
                  className="form-control-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter AdminId"
                  value={AdminId} onChange={(e) => setadminid(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control-2"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={policy} onChange={(e) => setPolicy(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1"
                >Accept our policy</label
                >
              </div>
              <button type="submit" className="btn-2 btn-purple-2 mt-3" onClick={handlesubmit}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
