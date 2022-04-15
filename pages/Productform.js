import React from 'react'
import { useState, useEffect } from 'react'
import baseUrl from '../helpers/baseUrl';
export default function Productform() {
    const [productname, setProductname] = useState('');
    const [price, setprice] = useState('');
    //const [description, setdescription] = useState('');
    const [image, setimage] = useState('');
    const [category, setcategory] = useState('');
    const submitHandler =async (e) => {
        e.preventDefault();
        const image = await imageUplaod();
        const res=fetch(`${baseUrl}/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({ name: productname, 
                price, 
                description, 
                image
             })
        })
        const res2 = res.then(res => res.json());
        if(res2.error){
            console.log(res2.error);
        }
        else
            router.push('/');
    }
    const imageUplaod = async () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'Project');
        data.append('cloud_name', 'de5rfdbf8');
        const res = await fetch('https://api.cloudinary.com/v1_1/de5rfdbf8/image/upload/', {
            method: 'POST',
            body: data
        });
        const file = await res.json();
        return file.url;
    }
    return (
        <div>
            <h1>Productform</h1>
            <form onSubmit={imageUplaod}>
                <input type="text" className='form-control mb-2' placeholder="Productname" value={productname} onChange={(e) => setProductname(e.target.value)} />
                <input type="text" className='form-control mb-2' placeholder="Price" value={price} onChange={(e) => setprice(e.target.value)} />
                <label>Image</label>
                <input className="form-control" type="file" id="formFile"
                accept='image/*' onChange={(e) => setimage(e.target.files[0])} />
                <select className='form-control mb-2'  style={{width: 500}} value={category} onChange={(e) => setcategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Foods">Foods</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Medicine">Medicine</option>
                </select>
                <button className='btn' type="submit">Submit</button>
                <img src={
                        image ? URL.createObjectURL(image) : ''
                    } className="rounded float-end" alt='Image preview' style={{width:'100px',height:'100px'}} />
            </form>

        </div>
    )
}
