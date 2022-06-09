import Chat from "../../Models/Chat";
import initDB from '../../helpers/initDB';
initDB();
export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getchat(req, res);
            break;
        case "POST":
           await poststatus(req, res);
           break;
    }


}
const getchat = async (req, res) => {
    const chat = await Chat.find({status:'active'});
    res.status(200).json(chat);
}

const poststatus = async (req, res) => {
    // const {user,status} = req.body;
    // const chat = await Chat.find({userId:user});
    

}
