import initDB from "../../helpers/initDB";
import Vet from "../../Models/Vet";
import User from "../../Models/User";
import bcrypt from "bcryptjs";

initDB();
export default async (req, res) => {
    const { name, email, password, Vet_id } = req.body;
    if (!name || !email || !password || !Vet_id) {
        return res.status(400).json({ error: "Please provide all the required fields" });
    }
    const vet = await Vet.findOne({ email });
    if (vet) {
        return res.status(400).json({ error: "Vet already exists" });
    }
    const user = await User.findOne({ email });
    if(user){
        return res.status(400).json({ error: "Vet already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new Vet({
        name,
        email,
        password: hashedPassword,
        Vet_id

    }).save();


    res.status(200).json(newUser);

}