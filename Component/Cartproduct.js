import React from 'react'

export const Cartproduct = () => {
    // const { product } = props;
    // const id = product.product;
    // const [productData, setProductData] = useState({});
    // useEffect(async () => {
    //     const res = await fetch(`${baseUrl}/api/product/${id}`);
    //     const data = await res.json();
    //     setProductData(data);
    // }, [id]);
  return (
    <tr>
                        {/* <td>
                            <div className="cart-info">
                                <img src="images/PngItem_2331886.png" />
                                <div className="mt-5 mt-md-4 mt-xs-5 ml-xs-5">
                                    <p className="text-cart-2">{productData.name}</p>
                                    <small className="text-cart-3">Price: ${product.price}.00</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td> */}
                        <td><input type="number" min="1" defaultValue={1} /></td>
                        <td>$10.00</td>
                    </tr>
  )
}
