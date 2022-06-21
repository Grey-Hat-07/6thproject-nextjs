import User from '../../Models/User'
import Order from '../../Models/Order'
import initDB from '../../helpers/initDB';
initDB();
export default async (req, res) => {

    
        const users = await User.find();
        const orders = await Order.find();
    // console.log(countuser);
    res.status(200).json({ user:users.length, order:orders.length });

}