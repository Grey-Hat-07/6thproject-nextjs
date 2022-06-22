import Chat from "../../../Models/Chat";

export default async (req, res) => {
    const {status,vetname} = req.body;
    if(status === "connected"){
        const {chat,user} =req.cookies;
        const data = await Chat.findOne({_id: chat});
        data.status = status;
        data.vetname = vetname;
        data.vetId = user;
        await data.save();
        return res.status(200).json(data);


    }

    else{
        const {chat} =req.cookies;
        const data = await Chat.findOne({_id: chat});
        data.status = status;
        await data.save();
        return res.status(200).json(data);

    }


}