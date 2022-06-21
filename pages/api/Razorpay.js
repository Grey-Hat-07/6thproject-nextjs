import { v4 as uuidV4 } from "uuid";
import Cart from "../../Models/Cart";
import Product from "../../Models/Product";
const Razorpay = require("razorpay");


export default async function handler(req, res) {
  const {productid} = req.cookies;
  const {total} = req.body;
  var price;
  if(!total){
  const product = await Product.findById({_id:productid});
  price = product.price*100;
  }
  if (req.method === "POST") {

    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    var options;
    if(!total){
    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount =price;
    const currency = "INR";
    options = {
      amount: amount,
      currency,
      receipt: uuidV4(),
      payment_capture,
    };}
    else{const payment_capture = 1;
      const amount =total*100;
      const currency = "INR";
      options = {
        amount: amount,
        currency,
        receipt: uuidV4(),
        payment_capture,
      };}


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
  }
  
  else {
    // Handle any other HTTP method
  }
}
