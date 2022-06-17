import initDB from "../../helpers/initDB";
import Admin from "../../Models/Admin";
import bcrypt from "bcryptjs";

initDB();
export default async (req, res) => {
    const { name, email, password, AdminId } = req.body;
    if (!name || !email || !password || !AdminId) {
        return res.status(400).json({ error: "Please provide all the required fields" });
    }
    const user = await Admin.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "Admin already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new Admin({
        name,
        email,
        password: hashedPassword,
        AdminId

    }).save();


    res.status(200).json(newUser);

}