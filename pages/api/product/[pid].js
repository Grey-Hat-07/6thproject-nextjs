import product from '../../../Models/Product'
 
 export default async (req,res) => {
     switch(req.method){
            case 'GET':
                getproduct(req,res);
                break;
            case 'DELETE':
                deleteproduct(req,res);
                break;
     }

}
const getproduct= async (req,res) => {
    const {pid}=req.query;
    const item=await product.findOne({_id:pid});
    res.status(200).json(item);
}
const deleteproduct= async (req,res) => {
    const {pid}=req.query;
    await product.findOneAndDelete({_id:pid});
    res.status(200).json({});
}