import Chat from "../../../Models/Chat";

export default async (req, res) => {
    switch(req.method) {
        case "GET": getmessage(req, res);
                    break;
        case "POST":postmessage(req, res);
                    break;  

    }

}
const getmessage = async (req, res) => {
const {chat} =req.cookies;
const data = await Chat.find({_id: chat});
res.status(200).json(data);
}
const postmessage = async (req, res) => {
    const {message, sender} = req.body;
    // console.log(message, sender);
    const {chat} =req.cookies;
    const data = await Chat.findOne({_id: chat});
    data.messages.push({
        message,
        sender,
        timestamp: Date.now()
    });
    data.save();
    res.status(200).json(data);


}