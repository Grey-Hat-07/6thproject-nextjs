import Chat from "../../Models/Chat";

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getchat(req, res);
            break;
        case "POST":
            await postchat(req, res);
            break;
        case "UPDATE":
            await updatestatus(req, res);
            break;
    }


}
const getchat = async (req, res) => {
    const { user } = req.body;
    const chat = await Chat.find({ userId: user });
    res.status(200).json(chat);
}
const postchat = async (req, res) => {
    const { user, messages } = req.body;
    const chat = await Chat.findOne({ userId: user });
    if (chat) {
        chat.messages.push({
            message: messages.message,
            sender: messages.sender,
            createdAt: Date.now()
        });
        await chat.save();
        res.status(200).json(chat);
    }

}
const updatestatus = async (req, res) => {
    const {user, status} = req.body;
    const chat = await Chat.findOne({userId: user});
    if(chat){
        chat.status = status;
        await chat.save();
        res.status(200).json(chat);
    }

}