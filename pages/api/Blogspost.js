import Blogs from "../../Models/Blogs";
import initDB from "../../helpers/initDB";

initDB();
export default async (req, res) => {
    switch (req.method) {
        case "GET":
        postBlogs(req,res);
        break;
        case "DELETE":
        deleteBlogs(req, res);
        break;
    }
    }
    const deleteBlogs = async (req, res) => {
        const { pid } = req.query;
        await Blogs.findOneAndDelete({ _id: pid });
        res.status(200).json({});
    }
    const postBlogs = async (req, res) => {
            const {title, writer, body,date} = req.body;
            if(!title || !writer || !body || !date){
                res.status(400).json({
                    error: "Please provide all the details"
                });
            }
            const Product =await new Blogs({name,price,description,image}).save();
            res.status(200).json(Product);
        }