import Product from "../../Models/Product";
import initDB from '../../helpers/initDB';
initDB();
export default async(req, res)=> {
    switch(req.method){
    case 'GET': await getproduct(req,res);
                break;
    case 'POST':await postproduct(req,res);
                break;
}
}
const getproduct= async (req,res) => {
    Product.find({},(err,products)=>{
        if(err){
            res.status(500).send(err);
            
        }
        else{
            res.status(200).json(products);
        }
    })
}
const postproduct= async (req,res) => {
    const {name,price,category,image,description,quantity}=req.body;
    if(!name || !price || !category|| !description || !quantity){
        res.status(400).json({error:"Please provide all the required fields"});
    }
    const product =await new Product({name,price,category,image,description,quantity}).save();
    if(product){
    res.status(200).json(product);
    }
    else{
        res.status(500).json({error:"Something went wrong"});
    }
}