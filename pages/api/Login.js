import initDB from "../../helpers/initDB";
import User from "../../Models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

initDB();
export default async (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password) {
        res.status(400).json({ error: "Please provide all the required fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
       return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: "Incorrect password" });
    }else{
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET,{
        expiresIn: "6h"
    });
    const {name, email } = user
    res.status(200).json({user})
    }
   

}