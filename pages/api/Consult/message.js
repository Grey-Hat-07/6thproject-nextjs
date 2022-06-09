import Chat from "../../../Models/Chat";

export default async(req, res) => {
    switch (req.method) {
        case "GET":
            await getMessage(req, res);
            break;
        case "POST":
            await postMessage(req, res);
            break;
    }

}
const getMessage = async (req, res) => {
    const {user} = req.body;
    const chat = await Chat.findOne({userId:user,status:'active'});
    res.status(200).json(chat);

}
const postMessage = async (req, res) => {
    const {user,message,sender} = req.body;
    const chat = await Chat.find({userId:user});
    chat.messages.push({
        message,
        sender,
        timestamp: Date.now()
    });
    await chat.save();


}