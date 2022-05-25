import Cart from "../../Models/Cart";
import initDB from "../../helpers/initDB";
initDB();
export default async (req, res) => {
    const { user } = req.cookies;
    switch (req.method) {
        case "GET":
            await fetchusercart(req, res);
            break;
        case "POST":
            const { product} = req.body;
            console.log(product);
            const cart = await Cart.findOne({ userId: user });
            if (cart) {
                cart.products.push({
                    product: product.productId,
                    quantity: 1,
                    price: product.price,
                    productname: product.productname
                });
                console.log(cart)
                await cart.save();

                res.status(200).json(cart);
            }
            else {
                res.status(404).json({ message: "Cart not found" });
            }
            break;
        case "DELETE":
            // const { product } = req.body;
            // const cart1 = await Cart.findOne({ userId: user });
            // if (cart1) {
            //     const item = cart1.products.find(
            //         (findproduct) => findproduct._id === product._id
            //     );
            //     console.log(product);
            //     console.log(item)
            //     if (item) {
            //         cart1.products.splice(cart1.products.indexOf(item), 1);
            //         await cart1.save();
            //         res.status(200).json({ message: "Product removed from cart" });
            //     }
            //     res.status(200).json({ message: "Product not found in cart" });
            // }
            // else {
            //     res.status(404).json({ message: "Cart not found" });
            // }

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