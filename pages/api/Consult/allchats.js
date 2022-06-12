import Chat from '../../../Models/Chat';

export default async (req, res) => {
    const chat = await Chat.find({});
    res.status(200).json(chat);

}