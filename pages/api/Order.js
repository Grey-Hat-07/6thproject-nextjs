import Order from '../../Models/Order';
import Cart from '../../Models/Cart';
import Product from '../../Models/Product'
import initDB from '../../helpers/initDB';
initDB();
export default async (req, res) => {
    switch (req.method) {
        case 'POST': await postorder(req, res);
            break;
        case 'GET': await getorder(req, res);
            break;
    
    }
}
const getorder = async (req, res) => {
    const { user } = req.cookies;
    const orders = await Order.find();
    if (orders) {
        return res.status(200).json(orders);
    }
    return res.status(400).json({ error: 'Something went wrong' });

}
const postorder = async (req, res) => {
    const { user } = req.cookies;
    const { products, total, email, paymentId,razorpayOrderId,cart } = req.body;
   
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
    products.forEach(async (product) => {
        const productId = product.product;
        const productData = await Product.findById({_id:productId});
        productData.quantity = productData.quantity - product.quantity;
        await productData.save();
    })
    if(cart){
        await Cart.findOneAndUpdate({userId:user},{$set:{products:[]}});
    }

    if(order) {

        return res.status(200).json(order);
    }
    return res.status(400).json({ error: 'Something went wrong' });
}