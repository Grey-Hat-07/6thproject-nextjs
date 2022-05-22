import Cart from "../../Models/Cart";
import initDB from "../../helpers/initDB";
initDB();
export default async (req, res) => {
    const { user } = req.cookies;
    switch (req.method) {
        case "GET":
            await fetchusercart(req, res);
            break;s
        case "POST":
            const { productId, quantity,price,productname } = req.body;
            const cart = await Cart.findOne({ userId: user });
            if (cart) {
                const product = cart.products.find(
                    (product) => product === productId
                );
                if (product) {
                    product.quantity += quantity;
                    await cart.save();
                } else {
                    cart.products.push({ product: productId, quantity,price,productname });
                    await cart.save();
                }
                res.status(200).json(cart);
            }
            else {
                res.status(404).json({ message: "Cart not found" });
            }
        case "DELETE":
            const { productId: productId1 } = req.body;
            const cart1 = await Cart.findOne({ userId: user });
            if (cart1) {
                const product = cart1.products.find(
                    (product) => product.product === productId1
                );
                if (product) {
                    cart1.products.splice(cart1.products.indexOf(product), 1);
                    await cart1.save();
                }
                res.status(200).json(cart1);
            }
            else {
                res.status(404).json({ message: "Cart not found" });
            }

    }
}
const fetchusercart = async (req, res) => {
    const { user } = req.cookies;
    try{
        const cart = await Cart.findOne({ userId: user });
        if (cart) {
            res.status(200).json(cart);
        }
        else {
            console.log("Cart not found");
            res.status(404).json({ message: "Cart not found" });
        }
    }catch{
        res.status(500).json({ message: "Something went wrong" });
    }

}