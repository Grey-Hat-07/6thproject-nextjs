import { v4 as uuidV4 } from "uuid";
import Cart from "../../Models/Cart";
const Razorpay = require("razorpay");


export default async function handler(req, res) {
  if (req.method === "POST") {
      const {user} = req.cookies;
      let total =0;
    const cart = await Cart.findOne({ userId: user });
    cart.products.forEach(product => {
        total = total + product.quantity;
    });
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = total*100;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: uuidV4(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
