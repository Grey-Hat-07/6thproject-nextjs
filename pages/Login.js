import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import baseUrl from '../helpers/baseUrl';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie'
export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    if(jsCookie.get('user')){
        router.push('/')
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${baseUrl}/api/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const res2 = await res.json()
        if (res2.error) {
            alert(res2.error)
        }
        else {
            // console.log(res2)
            if(res2.user.Vet_id){
                jsCookie.set('vet', res2.user.Vet_id);
            }
            jsCookie.set('user', res2.user._id)
            router.push('/')
        }

    }
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
                                    value={email} onChange={(e) => setEmail(e.target.value)}
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
                            <Link href='/Customersignup'><a className='text-center'>Don't have Account?</a></Link><br />
                            <button type="submit" className="btn-2 btn-purple-2 mt-3"
                                onClick={handlesubmit}>
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
