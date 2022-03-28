import Blogs from '../../../Models/Blogs'; ;
 
 export default async (req,res) => {
     switch(req.method){
            case 'GET':
                getBlogs(req,res);
                break;
            case 'DELETE':
                deleteBlogs(req,res);
                break;
     }

}
const getBlogs= async (req,res) => {
    const {pid}=req.query;
    const item=await Blogs.findOne({_id:pid});
    res.status(200).json(item);
}
const deleteBlogs= async (req,res) => {
    const {pid}=req.query;
    await Blogs.findOneAndDelete({_id:pid});
    res.status(200).json({});
}