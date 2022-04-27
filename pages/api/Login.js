import initDB from "../../helpers/initDB";
import User from "../../Models/User";
import bcrypt from "bcryptjs";
import Vet from "../../Models/Vet";
import Admin from "../../Models/Admin";

initDB();
export default async (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password) {
        res.status(400).json({ error: "Please provide all the required fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        const vet = await Vet.findOne({ email });
        if (!vet) {
            const admin= await Admin.findOne({ email });
            if (!admin) {
                return res.status(400).json({ error: "User does not exist" });
            }
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            return res.status(200).json({ user: admin });
        }
        const ismatch = await bcrypt.compare(password, vet.password);
        if (!ismatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        return res.status(200).json({ user: vet });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: "Incorrect password" });
    }else{
    
    res.status(200).json({user})
    }
   

}