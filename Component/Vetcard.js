
import React from 'react'
import jsCookie from 'js-cookie'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import baseUrl from '../helpers/baseUrl';
export default function Vetchat(props) {
    const {chat} = props;
    const router = useRouter();
    const [account, setAccount] = useState();
    useEffect(async() => {
        const res = await fetch(`${baseUrl}/api/Account`);
        const data = await res.json();
        if(data){
            setAccount(data);
        }

    }, [])
    const setcookies = async()=>{
        jsCookie.set('chat', chat._id);
        const res = await fetch(`${baseUrl}/api/Consult/chatstatus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "connected",
                vetname: account.name
            })
        })
        router.push('/Vetchat');
    }
    
    return (
        <div className="card-body" >
            <div className="customer">
                <div className="info">
                    <img src="images/FallenCap.jpg" className="chat-profile-dp" alt="img.jpg" />
                    <span className="status"></span>
                    <div>
                        <h4>{chat.username}</h4>
                    </div>
                </div>
                <div className="react">
                    <span className="las la-sms" onClick={setcookies}></span>
                    <span className="las la-phone"></span>
                </div>
            </div>
        </div>
    )
}