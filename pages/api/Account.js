import Vet from '../../Models/Vet';
import User from "../../Models/User";
import Admin from '../../Models/Admin'
import initDB from '../../helpers/initDB';
initDB();
export default async (req, res) => {
    const {vet,AdminId} = req.cookies;
    const { user } = req.cookies;
    if(vet){
        const vetdata = await Vet.findOne({_id: user});
        return res.status(200).json(vetdata);
    }
    if(AdminId){
        const admindata = await Admin.findOne({_id: user});
        return res.status(200).json(admindata);
    }
    const data = await User.findOne({ _id: user });

    res.status(200).json(data);
}