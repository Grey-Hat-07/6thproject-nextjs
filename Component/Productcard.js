import React from 'react'
import { useState, useEffect } from 'react';
export const Productcard = (props) => {
    const { product } = props;
    const [desc, setDesc] = useState(product.description);
    const [quantity, setQuantity] = useState(product.quantity);
    const updateproduct = async () => {
        console.log(product);
        console.log(desc, quantity);
    }
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>
                <i onClick={updateproduct} className="las la-pen"></i>
                <span><i className="las la-trash"></i></span>
            </td>
        </tr>
    )
}
