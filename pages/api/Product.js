import Product from "../../Models/Product";
import initDB from '../../helpers/initDB';
initDB();
export default async (req, res) => {
    switch (req.method) {
        case 'GET': await getproduct(req, res);
            break;
        case 'POST': await postproduct(req, res);
            break;
        case 'DELETE': await deleteproduct(req, res);
            break;
        case 'UPDATE': await updateproduct(req, res);
            break;
    }
}
const getproduct = async (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(500).send(err);

        }
        else {
            res.status(200).json(products);
        }
    })
}
const postproduct = async (req, res) => {
    const { name, price, category, image, description, quantity } = req.body;
    if (!name || !price || !category || !description || !quantity) {
        res.status(400).json({ error: "Please provide all the required fields" });
    }
    const product = await new Product({ name, price, category, image, description, quantity }).save();
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(500).json({ error: "Something went wrong" });
    }
}
const deleteproduct = async (req, res) => {


}
const updateproduct = async (req, res) => {
    const { _id, description, quantity } = req.body;
    const product = await Product.find({ _id });
    product.description = description;
    product.quantity = product.quantity + quantity;
    product.save();
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(500).json({ error: "Something went wrong" });
    }

}