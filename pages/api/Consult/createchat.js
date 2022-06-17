import Chat from "../../../Models/Chat";

export default async (req, res) => {
    const {user} = req.cookies;
    const {username} = req.body;
    const chat =await Chat.create({
        userId: user,
        vetId: user,
        username,
        vetname: "connecting",
        status: "active",
    });
    res.status(200).json(chat);
}