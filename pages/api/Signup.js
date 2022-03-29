import initDB from "../../helpers/initDB";
import User from "../../Models/User";
import bcrypt from "bcryptjs";

initDB();
export default async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: "Please provide all the required fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new User({
        name,
        email,
        password: hashedPassword,
        role
    }).save();


    res.status(200).json(newUser);

}