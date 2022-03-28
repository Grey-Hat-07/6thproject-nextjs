
import User from "../../Models/User";
export default async (req, res) => {
    const { user } = req.cookies;
    const data = await User.findOne({ _id: user });

    res.status(200).json(data);
}