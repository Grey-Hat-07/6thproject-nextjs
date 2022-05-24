import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Similarcard(props) {
    const router = useRouter();
    const {recomproduct} = props;
    const routeproduct=()=>{
        window.location.href = `/product/${recomproduct._id}`;
        //router.push(`/product/${recomproduct._id}`);


    }
    // console.log(recomproduct)
  return (<div>
    {/* <Link
      href={'/product/[id]'}
      as={`/product/${recomproduct._id}`}
    > */}
      <div className="item">
        <span onClick={routeproduct}>
        <img src={recomproduct.image} className="product-img-2" alt="item1.png" />
        </span>
      </div>
      {/* </Link> */}
      </div>
  
  )
}
