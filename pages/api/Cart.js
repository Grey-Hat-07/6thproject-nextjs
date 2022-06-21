import Cart from "../../Models/Cart";
import initDB from "../../helpers/initDB";
initDB();
export default async (req, res) => {
    
    switch (req.method) {
        case "GET":
            await fetchusercart(req, res);
            break;
        case "POST":
            await postcart(req, res);
            break;
            
        case "DELETE":
            await deletecart(req, res);
            break;

    }
}
const fetchusercart = async (req, res) => {
    const { user } = req.cookies;
    try {
        const cart = await Cart.findOne({ userId: user });
        if (cart) {
            res.status(200).json(cart);
        }
        else {
            console.log("Cart not found");
            res.status(404).json({ message: "Cart not found" });
        }
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }

}
const postcart = async (req, res) => {
    const { user } = req.cookies;
    const { product} = req.body;
    //console.log(product);
    const cart = await Cart.findOne({ userId: user });
    if (cart) {
        cart.products.push({
            product: product.productId,
            quantity: 1,
            price: product.price,
            productname: product.productname
        });
        //console.log(cart)
        await cart.save();

        res.status(200).json(cart);
    }
    else {
        res.status(404).json({ message: "Cart not found" });
    }
}
const deletecart = async (req, res) => {
    const { user } = req.cookies;
    const { productId } = req.body;
    const cart = await Cart.findOne({ userId: user });
    
    cart.products.forEach((item, i) => {
        if (item.product == productId) {
            cart.products.splice(i, 1);
            cart.save();
        }
    })
    res.status(200).json(cart);

}