import Chat from "../../../Models/Chat";

export default async (req, res) => {
    const {user} = req.cookies;
    const {username} = req.body;
    const chat =await Chat.create({
        UserId: user,
        vetId: user,
        username,
        status: "active",
    });
    res.status(200).json(chat);
}