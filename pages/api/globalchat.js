import GlobalChat from "../../Models/GlobalChat";

export default async (req, res) => {

    switch (req.method) {
        case "GET": await getGlobalChat(req, res);
            break;
        case "POST": await postGlobalChat(req, res);
            break;

    }

}
    const getGlobalChat = async (req, res) => {
        const globalChat = await GlobalChat.find({});
        res.status(200).json(globalChat);
    }

    const postGlobalChat = async (req, res) => {
        const {name, message} = req.body;
        const {user} = req.cookies;
        const globalChat = await new GlobalChat({
            name,
            message,
            userId:user
        });
        await globalChat.save();
        res.status(200).json(globalChat);

    }