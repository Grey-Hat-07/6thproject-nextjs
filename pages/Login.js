import React from 'react'
import {useState, useEffect} from 'react'
export default function login() {
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
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input
                                    type="Name"
                                    className="form-control-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter name"
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
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1"
                                >Accept our policy</label
                                >
                            </div>
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
