import React from 'react'
import { parseCookies } from 'nookies'
import baseUrl from '../helpers/baseUrl';
export default function userAccount(props) {
    const {user} = parseCookies();
    const {Orders} = props;
    Orders.reverse();
  return (
    <div>{Orders&&user&&
        Orders.map((order,index)=>{
            if(order.userId===user){
                return<>
                    {order.email}
                </>
            }
        })
        }</div>
  )
}
export async function getStaticProps(context) {
    const res = await fetch(`${baseUrl}/api/Order`, {
        method: 'GET'
    })
    const data = await res.json()
    return {
        props: {
            Orders: data
        }
    }
}
