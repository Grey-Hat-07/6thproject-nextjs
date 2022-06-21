import Vet from '../../Models/Vet';
import User from "../../Models/User";
import initDB from '../../helpers/initDB';
initDB();
export default async (req, res) => {
    const {vet} = req.cookies;
    const { user } = req.cookies;
    if(vet){
        const vetdata = await Vet.findOne({_id: user});
        return res.status(200).json(vetdata);
    }
    const data = await User.findOne({ _id: user });

    res.status(200).json(data);
}