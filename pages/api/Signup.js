import initDB from "../../helpers/initDB";
import User from "../../Models/User";
import Cart from "../../Models/Cart";
import bcrypt from "bcryptjs";

initDB();
export default async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
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
    }).save();
    const cart = await new Cart({ userId: newUser._id }).save();

    res.status(200).json(newUser);

}