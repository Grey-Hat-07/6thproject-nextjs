import Product from "../../Models/Product";

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
    const {name,price,category,image}=req.body;
    if(!name || !price || !description || !image){
        res.status(400).json({error:"Please provide all the required fields"});
    }
    const product =await new Product({name,price,category,image}).save();
    res.status(200).json(product);
}