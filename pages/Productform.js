import React from 'react'
import { useState, useEffect } from 'react'
import baseUrl from '../helpers/baseUrl';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import {storage} from '../firebase/main.firebase'
export default function Productform() {
    const [productname, setProductname] = useState('');
    const [price, setprice] = useState('');
    //const [description, setdescription] = useState('');
    const [image, setimage] = useState(null);
    const [imageurl, setimageurl] = useState(null);
    const [category, setcategory] = useState('');
    const submitHandler =async (e) => {
        e.preventDefault();
        if(!image || !productname || !price || !category){
            return alert("Please fill all the fields");
        }
        console.log(image)
        console.log(productname,price,category);
        const res= await fetch(`${baseUrl}/api/Product`, {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json',
                 },
            body: JSON.stringify({ 
                name: productname, 
                price,
                category, 
                image
             })
        })
        const res2 = await res.json();
        if(res2.error){
            //console.log(res2.error);
            alert(res2.error);
        }
        else{
            alert("Product added successfully");
            setProductname('');
            setprice('');
            setimage(null);
            setimageurl(null);
            setcategory('');
            window.location.reload();
        }
     }
    const imageUpload = async (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `project/${imageurl.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageurl);
        uploadTask.on(
          "state_changed", 
          snapshot =>{},
          err=>console.log(err),
          ()=>{
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => {
            console.log(url);
            setimage(url);
            alert("Image verified successfully");
            })
          }
          )
         
        //console.log(file.url);
    }
    return (
        <div>
            <h1>Productform</h1>
            <form className='container' onSubmit={submitHandler}>
                <input type="text" className='form-control mb-2' placeholder="Productname" value={productname} onChange={(e) => setProductname(e.target.value)} />
                <input type="number" className='form-control mb-2' placeholder="Price"  value={price} onChange={(e) => setprice(e.target.value)} />
                <label>Image</label>
                <input className="form-control" type="file" id="formFile"
                accept='image/*' onChange={(e) => {setimageurl(e.target.files[0]); }} />
                <select className='form-control mb-2'  style={{width: 500}} value={category} onChange={(e) => setcategory(e.target.value)}>
                    <option value={null}>Select Category</option>
                    <option value="Foods">Foods</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Medicine">Medicine</option>
                </select>
                {image?<button className='btn me-2' type="submit">Submit</button>
                :<button className='btn disabled' disabled>Submit</button>}
                { imageurl &&<>
                    <img src={
                        imageurl ? URL.createObjectURL(imageurl) : ''
                    } className="rounded float-end" alt='Image preview' style={{width:'100px',height:'100px'}} />
                    {!image?<button className='btn' onClick={imageUpload}>Verify image</button>:<button className='btn' disabled>Verify image</button>}
                    </>}
            </form>

        </div>
    )
}
