import Order from '../../Models/Order';
import Cart from '../../Models/Cart';
export default async (req, res) => {
    const { user } = req.cookies;
    const { products, total, email, paymentId,razorpayOrderId } = req.body;
    // await Cart.findOne({ userId: user },{
    //     $setField: {products: []}
    // });
    var status = 'created'; 
    const order = await Order.create({
        userId: user,
        products,
        total,
        email,
        paymentId,
        razorpayOrderId,
        status
    })

    if(order) {

        return res.status(200).json(order);
    }
    return res.status(400).json({ error: 'Something went wrong' });

}