import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link';
export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row mbc-1 mtc-1">
                    <div className="col-xl-12">
                        <h1 className="texts-1 wow fadeInLeft">Log In</h1>
                    </div>
                    <div className="col-xl-12 m-form-1">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control-2"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <Link href='/Signup'><a className='text-center'>Don't have Account?</a></Link><br/>
                            <button type="submit" className="btn-2 btn-purple-2 mt-3">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
