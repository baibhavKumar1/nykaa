const auth = require("../Middleware/auth.middleware");
const ProductModel = require("../Model/product.model");
const express = require('express');
const ProductRouter = express.Router();

ProductRouter.use(auth)

ProductRouter.get('/', async (req, res) => {
    const { name, category, gender, sort, order } = req.query;
    try {
        const value = { ...(name && { name }), ...(category && { category }), ...(gender && { gender }) };
        const sortedData = sort && (order === "asc" || order === "desc") ? { price: order === "asc" ? 1 : -1 } : {};
        const product = await ProductModel.find(value).sort(sortedData);
        if (product.length > 0) {
            return res.status(200).json({ product });
        } else {
            return res.status(404).send("No product available");
        }
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

ProductRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            res.status(400).send('Product not found')
        }
        else {
            res.status(200).send(product)
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
})

ProductRouter.post('/', async (req, res) => {
    const { picture, name, description, gender, category, price } = req.body;
    try {
        const product = await ProductModel.find({ name });
        if (product && product.length > 0) {
            console.log(product)
            res.status(400).send('Product already exists')
        } else {
            const newProduct = new ProductModel({
                picture, name, description, gender, category, price
            })
            await newProduct.save();
            res.status(200).json({ message: "Product Added", newProduct })
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
})

ProductRouter.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            const newProduct = await ProductModel.findByIdAndUpdate(
                id,
                { ...req.body, updated_at: Date.now() }, { new: true }
            );
            res.status(200).json({ message: "product updated successfully", newProduct });
        }
        else {
            res.status(400).send("Product not found")
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
ProductRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            const newProduct = await ProductModel.findByIdAndUpdate(
                id,
                { ...req.body, updated_at: Date.now() }, { new: true }
            );
            res.status(200).json({ message: "product updated successfully", newProduct });
        }
        else {
            res.status(400).send("Product not found")
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

ProductRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            res.status(401).json({ message: "Product not found" });
        } else {
            const newProduct = await ProductModel.findByIdAndDelete(id);

            res.status(200).json({ message: "Product deleted successfully", newProduct });
        }
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = ProductRouter